import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'
import LinkToSet from './secondaryComponents/LinkToSet';
import {connect} from 'react-redux';
import {fetchSetList, 
        fetchCardList,
        fetchCurrentSet} from './helperFunctions/headerFetchRequests';
import { fetchUserQueue } from './fetch-data';
import {updateSetList,
        updateCardList, 
        updateUserObject, 
        updateIsUserLoggedIn,
        logoutUser,
        updateQueue
    } from './actions';
import SearchBar from './search-bar';

let mapStateToProps = (state) => {
    return {setList: state.setList, 
            isUserLoggedIn: state.isUserLoggedIn,
            userObject: state.userObject}
};

let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
  };


let checkLocalStorageForUserObject = (dispatch) => {
    let userObject = localStorage.getItem('userObject');
    if (userObject) {
        dispatch(updateIsUserLoggedIn());
        return JSON.parse(userObject);
    } else {
        return {};
    }
}
class Header extends Component {
    constructor(props) {
		super(props);
		this.state = {active: false};
    }
    
    componentDidMount() {
        fetchSetList()
        .then(res => this.props.dispatch(updateSetList(res)))
      
        this.props.dispatch(
            updateUserObject(
                checkLocalStorageForUserObject(this.props.dispatch)))
      
        fetchCardList()
        .then(res => this.props.dispatch(updateCardList(res)))

    }
    
    render(){
    let {setList, isUserLoggedIn, userObject} = this.props;
    let {active} = this.state;

    let toggleActive = (e) => {
        if (active === true) {
            this.setState({active: false});
        } else {
            this.setState({active: true});
        }
    }


    let MenuFunction = () => {
        if (active === false) {
            return <div className="setListStatic">Browse by Set</div>
        } else {
            return(
                <ul className="setListDropdownMenu">
                {
                    setList.map(set => <li onClick={
                        () => fetchCurrentSet(set)
                                .then(res => this.props.dispatch(updateCardList(res)))
                    }><LinkToSet set={set} key={set}/></li>)
                }
                <li onClick={toggleActive}>Close</li></ul>)
        }
    };

    let LoginOrProfileOption = () => {
        if (isUserLoggedIn === true ) {
            return  <ul className="headerList"><li onClick={
                () => fetchUserQueue(this.props.userObject.token)
                        .then(res => this.props.dispatch(updateQueue(res)))
            }><Link to='/profile'>{ this.props.userObject.username }</Link></li> 
                <li onClick={() => {
                localStorage.removeItem('userObject');
                this.props.dispatch(logoutUser())}}>Logout</li>
                </ul>
        } else {
            return <ul className="headerList">
                    <li><Link to='/login'>Login</Link> / <Link to='/register'>Create Account</Link></li>
                    </ul>
        }
    }

    return <div className="header">
        <ul className="headerList">
            <li onClick={() => 
                    fetchCardList()
                    .then(res => this.props.dispatch(updateCardList(res)))
                    }>
                <Link to='/'><img src={logo} className="headerLogo" alt="logo"/>
                </Link>
            </li>
        </ul>
        <div className="setListDropdown" onClick={toggleActive}>{
            <MenuFunction />
        }</div>
            <SearchBar />
            <LoginOrProfileOption />
    </div>
    }
}

let HeaderComponent = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderComponent;

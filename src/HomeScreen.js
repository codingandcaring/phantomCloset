import React from 'react';
import SetWithCardList from './secondaryComponents/SetWithCardList';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {setList: state.setList}
};  

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

let HomeScreenDumb = ({ dispatch, setList, history }) => 
    <div className="homeScreen">
        <div className="homeScreenTop"></div>
        <SetWithCardList setList={setList} />
    </div>


let HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenDumb)

export default HomeScreen;
import React from 'react';
import SetWithCardList from './secondaryComponents/SetWithCardList';
import {connect} from 'react-redux';

const standardList = ['Kaladesh', 'Aether Revolt', 
    'Amonket', 'Hour of Devastation', 'Ixalan', 
    'Rivals of Ixalan', 'Dominaria']

let mapStateToProps = (state) => {
    return {setList: state.setList, cardList: state.cardList}
};  

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

let HomeScreenDumb = ({ dispatch, cardList, history }) => 
    <div className="homeScreen">
        <div className="homeScreenTop"></div>{
            standardList.map( set => <SetWithCardList set={set} cardList={cardList} />)
        }
    </div>


let HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenDumb)

export default HomeScreen;
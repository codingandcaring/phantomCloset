const UPDATE_USER_OBJECT = "UPDATE_USER_OBJECT";
export let updateUserObject = (token) => ({type: UPDATE_USER_OBJECT, payload: token});
let updateUserObjectAction = (state, action) => {
    let newUserObject = Object.assign({}, action.payload);
    return ({...state, userObject: newUserObject});
  }
updateUserObject.toString = () => UPDATE_USER_OBJECT;

const UPDATE_IS_USER_LOGGED_IN = "UPDATE_IS_USER_LOGGED_IN";
export let updateIsUserLoggedIn = () => ({type: UPDATE_IS_USER_LOGGED_IN});
let updateIsUserLoggedInAction = (state, action) => {
    return ({...state, isUserLoggedIn: true});
  }
updateIsUserLoggedIn.toString = () => UPDATE_IS_USER_LOGGED_IN;

const LOGOUT_USER = "LOGOUT_USER";
export let logoutUser = () => ({type: LOGOUT_USER});
let logoutUserAction = (state, action) => {
    return ({...state, isUserLoggedIn: false, userObject: {}});
}
logoutUserAction.toString = () => LOGOUT_USER;

const UPDATE_SEARCH = 'UPDATE_SEARCH'
export let updateSearch = (payload) => ({ type: UPDATE_SEARCH, payload });
let updateSearchAction = (state, action) =>
    ({...state, searchInput: action.payload});
updateSearchAction.toString = () => UPDATE_SEARCH;

const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS'
export let updateSearchResults = (payload) => ({ type: UPDATE_SEARCH_RESULTS, payload });
let updateSearchResultsAction = (state, action) =>
    ({...state, searchAutocomplete: action.payload});
updateSearchResultsAction.toString = () => UPDATE_SEARCH_RESULTS;

const UPDATE_SET_LIST = "UPDATE_SET_LIST";
export let updateSetList = (listFromServer) => ({type: UPDATE_SET_LIST, payload: listFromServer});
let updateSetListAction = (state, action) => {
    return ({...state, setList: action.payload});
}
updateSetList.toString = () => UPDATE_SET_LIST;

const ADD_TO_QUEUE = 'ADD_TO_QUEUE'
export let addToQueue = (payload) => ({ type: ADD_TO_QUEUE, payload });
let addToQueueAction = (state, action) => {
    let newQueue = state.cardQueue.concat([action.payload]);
    return ({...state, cardQueue: newQueue});
}
addToQueueAction.toString = () => ADD_TO_QUEUE;

const UPDATE_CARD_LIST = "UPDATE_CARD_LIST";
export let updateCardList = (listFromServer) => ({type: UPDATE_CARD_LIST, payload: listFromServer});
let updateCardListAction = (state, action) => {
    return ({...state, cardList: action.payload});
}
updateCardList.toString = () => UPDATE_CARD_LIST;

const UPDATE_CURRENT_CARD = "UPDATE_CURRENT_CARD";
export let updateCurrentCard = (payload) => ({type: UPDATE_CURRENT_CARD, payload});
let updateCurrentCardAction = (state, action) => {
    return ({...state, currentCard: action.payload });
}
updateCurrentCardAction.toString = () => UPDATE_CURRENT_CARD;

const UPDATE_QUEUE = "UPDATE_QUEUE";
export let updateQueue = (payload) => ({type: UPDATE_QUEUE, payload});
let updateQueueAction = (state, action) => {
    return ({...state, cardQueue: action.payload});
}
updateQueue.toString = () => UPDATE_QUEUE;

let reducers = {
    [updateUserObject]: updateUserObjectAction,
    [updateIsUserLoggedIn]: updateIsUserLoggedInAction,
    [updateSetList]: updateSetListAction,
    [updateCardList]: updateCardListAction,
    [updateSearchAction]: updateSearchAction,
    [updateSearchResultsAction]: updateSearchResultsAction,
    [addToQueueAction]: addToQueueAction,
    [updateCurrentCardAction]: updateCurrentCardAction,
    [logoutUserAction]: logoutUserAction,
    [updateQueue]: updateQueueAction
}

export default reducers;

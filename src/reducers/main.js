import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';


//Centralization of state and state management logic
var rootReducer = combineReducers({
  videoList: videoListReducer,
  currentVideo: currentVideoReducer
});

export default rootReducer;

// reducer template has state properties as obj keys
// const reducer = combineReducers({
//   a: doSomethingWithA,
//   b: processB,
//   c: c
// })

// const rootReducer = Redux.combineReducers({
//   votes: votesReducer
// })
// const store = Redux.createStore(rootReducer) //also redux specific

// reducer accepts an action from dispatch

// var rootReducer = (state = { videoList: [], currentVideo: null }, action) => {
//   return {
//     videoList: videoListReducer(state.videoList, action),
//     currentVideo: currentVideoReducer(state.currentVideo, action)
//   };
// };
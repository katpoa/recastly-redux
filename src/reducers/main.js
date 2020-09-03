import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

// var rootReducer = (state = { videoList: [], currentVideo: null }, action) => {
//   return {
//     videoList: videoListReducer(state.videoList, action),
//     currentVideo: currentVideoReducer(state.currentVideo, action)
//   };
// };

var rootReducer = combineReducers({
  videoList: videoListReducer,
  currentVideo: currentVideoReducer
});

// reducer template has state properties as obj keys
// const reducer = combineReducers({
//   a: doSomethingWithA,
//   b: processB,
//   c: c
// })

//Centralization of state and state management logic
// const rootReducer = Redux.combineReducers({
//   votes: votesReducer
// })
// const store = Redux.createStore(rootReducer) //also redux specific

// reducer accepts an action from dispatch

export default rootReducer;
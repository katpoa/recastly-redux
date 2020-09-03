import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = () => {};

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.
//Centralization of state and state management logic
Redux.combineReducers({ //rootReducer and combineReducers are recognized function name keywords
  currentVideo: currentVideoReducer,
  videoList: videoListReducer
})

// reducer accepts an action from dispatch

export default rootReducer;

import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    //  -> update VideoPlayer to the video
    return action.video || null;
    // in a copy of state
    // update the current video to action.video
    // returns the new state object
  }
  return state;
};

export default currentVideoReducer;

// Error: Given action "CHANGE_VIDEO_LIST", reducer "currentVideo" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.

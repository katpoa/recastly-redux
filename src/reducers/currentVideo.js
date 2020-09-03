import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    //  -> update VideoPlayer to the video
    return action.video;
    // in a copy of state
    // update the current video to action.video
    // returns the new state object
  }
  return state;
};

export default currentVideoReducer;

var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  // return an object with key as currentVideo and value of input video
  // type would be something like "CHANGEVIDEO"
  type: 'CHANGE_VIDEO',
  video: video
});

export default changeVideo;

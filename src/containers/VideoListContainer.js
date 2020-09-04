import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = store => {
  return {
    videos: store.VideoList
  };
};

var mapDispatchToProps = (dispatch, ownProps) => ({
  handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(ownProps.video))
});

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;

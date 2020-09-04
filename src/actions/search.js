import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  // goal: handle YouTube API search and return a function that dispatches appropriate actions with queried search data

  // _.debounce
  return (dispatch) => {
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  };
};

export default handleVideoSearch;


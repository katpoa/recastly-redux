import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  // goal: handles API search and returns an action object with the results of the search
  // i - query string
  // o - n/a
  // c - limit search result count default (5), possibly create interval limit (debounc)?
  // s - runs call on youtube api, dispatch additional actions to reducer
  // e - no query,

  // pseudo
  // define dispatch operation
  var dispatchAction = (dispatch) => ({
    // passed into container which is connected to the component
    // sends action object to reducer
    changeList: function(list) {
      dispatch(changeVideoList(list));
    }
  });

  var cb = (items) => {
    console.log('ran callback after api call', items);
  };

  // call search youtube
  searchYouTube({ q: q, max: 5, key: YOUTUBE_API_KEY }, cb);

  return () => { console.log ('result of handleVideoSearch was called'); };

  // dispatches action creator for change list with video list as param

  // dispatches change video with first video as param



};

export default handleVideoSearch;

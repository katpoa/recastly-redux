import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  // goal: handle YouTube API search and return a function that dispatches appropriate actions with queried search data
  // i - query string
  // o - function (thunk)
  // c - limit search result count default (5), possibly create interval limit (debounc)?
  // s - runs call on youtube api, dispatch additional actions to reducer
  // e - no query passed
  // return function that takes dispatch function as an paramerter
  // function searches youtube -- searchYouTube()
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  };

  return (dispatch) => {
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  };
};

export default handleVideoSearch;

// return {
//   changeVideoList: dispatch(changeVideoList(searchYouTube({ q: q, max: 5, key: YOUTUBE_API_KEY }, (list) => { return list; }))),
//   changeVideo: dispatch(changeVideo(searchYouTube({ q: q, max: 5, key: YOUTUBE_API_KEY }, (list) => { return list[0]; })))
// };

// searchYouTube({ q: q, max: 5, key: YOUTUBE_API_KEY }, dispatchActions);
// var dispatchActions = (videos) => {
//   dispatch(changeVideoList(videos));
//   dispatch(changeVideo(videos[0]));
// };

// EXAMPLE REDUX-THUNK LIBRARY
// function createThunkMiddleware(extraArgument) {
//   return ({ dispatch, getState }) => next => action => {
// 		// This gets called for every action you dispatch.
// 		// If it's a function, call it.
//     if (typeof action === 'function') {
//       return action(dispatch, getState, extraArgument);
//     }

// 		// Otherwise, just continue processing this action as usual
//     return next(action);
//   };
// }

// const thunk = createThunkMiddleware();
// thunk.withExtraArgument = createThunkMiddleware;

// export default thunk;


// // example 2
// export function itemsFetchData(url) {
//   return (dispatch) => {
//       dispatch(itemsIsLoading(true));

//       fetch(url)
//           .then((response) => {
//               if (!response.ok) {
//                   throw Error(response.statusText);
//               }

//               dispatch(itemsIsLoading(false));

//               return response;
//           })
//           .then((response) => response.json())
//           .then((items) => dispatch(itemsFetchDataSuccess(items)))
//           .catch(() => dispatch(itemsHasErrored(true)));
//   };
// }
// #
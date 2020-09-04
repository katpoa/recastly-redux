var searchYouTube = ({key, query, max = 5}, callback = () => {}) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: key,
      type: 'video',
      part: 'snippet',
      maxResults: max,
      q: query,
      videoEmbeddable: 'true'
    },
    success: ({items}) => {
      console.log('API call success!');
      callback(items);
    },
    error: () => console.log('Failed to fetch data!')
  });
};

export default searchYouTube;

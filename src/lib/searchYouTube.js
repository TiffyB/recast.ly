var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      videoEmbeddable: 'true',
      type: 'video',
      key: options.key
    },
    success: function(data) {
      // console.log(data.items); 
      callback(data.items);
    },
    fail: function(data) {
      console.log('fail');
    }
  });
};

window.searchYouTube = searchYouTube;

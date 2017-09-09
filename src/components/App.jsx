class App extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleClick = this.onTitleClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      // currentVideo: searchYouTube({max: 5, query:"puppy", key: YOUTUBE_API_KEY}, function(data) {
      //   return data[0];
      // }),
      // currentVideoList: searchYouTube({max: 5, query:"puppy", key: YOUTUBE_API_KEY}, function(data) {
      //   return data;
      // })
      currentVideo: exampleVideoData[0],
      currentVideoList: exampleVideoData
      // currentVideo: {},
      // currentVideoList: []
    };
  }
  
  onTitleClick(event) {
    this.setState({
      currentVideo: event
    });
  }
  
  onSubmit(searchString) {
    var options = {
      max: 5,
      query: searchString,
      key: YOUTUBE_API_KEY
    };
    var context = this;
    searchYouTube(options, function(data) {
      context.setState({
        currentVideoList: data,
        currentVideo: data[0]
      });
    });
  }
  
  componentDidMount() {
    // var context = this;
    // console.log(context);
    this.props.action({max: 5, query:'puppy', key: YOUTUBE_API_KEY}, (data) => {
      // console.log('inside function', context);
      this.setState({
        currentVideo: data[0],
        currentVideoList: data
      });  
    });
  }
  
  
  render () {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search action={this.onSubmit}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.currentVideoList} action={this.onTitleClick}/>
        </div>
      </div>
    </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> <VideoPlayer video={window.exampleVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em></em> <VideoList videos={window.exampleVideoData}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.App = App;

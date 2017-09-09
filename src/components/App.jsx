class App extends React.Component {
  constructor(props) {
    super(props);
    
    state: {
      currentVideo: video={window.exampleVideoData[0]},
      currentVideoList: videos={window.exampleVideoData}
    }
  }
  
  onTitleClick() {
    this.setState({
      currentVideo: this
    })
  }
  
  render () {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> <VideoPlayer video={props.state.currentVideo} xx={props.onTitleClick}/></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em></em> <VideoList videos={props.state.currentVideoList}/></h5></div>
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

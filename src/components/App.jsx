class App extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleClick = this.onTitleClick.bind(this);
    this.state = {
      currentVideo: exampleVideoData[0],
      currentVideoList: exampleVideoData
    };
  }
  
  onTitleClick(event) {
    this.setState({
      currentVideo: event
    });
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
          <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo} /></h5></div>
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

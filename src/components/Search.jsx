var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyUp={function(e) {
      var searchString = e.target.value;
      setTimeout(function() {
        props.action(searchString);  
      }, 500);
    }}/>
    <button className="btn hidden-sm-down" onClick={function(e) {
      var searchString = e.target.value;
      props.action(searchString);
    }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

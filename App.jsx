import React from 'react'
import ReactDOM from 'react-dom';
// require("./css/bootstrap.css");

var limit = 48;
var base_url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit="+limit.toString()+"&q=";

var SearchBar = React.createClass({
  getInitialState: function() {
    return {value: 'Enter Search Text'};
  },
  handleClick: function(){
    this.setState({value:''});
  },
  performSearch : function(){
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    console.log(query);
    if(query !== null && query.length > 0){
      this.props.search(query);
    }
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (

			<div className="container" id="search-bar">
				<div className="row">
					<div className="col-md-6 col-md-push-3">
            <input type="text" ref="query" className="form-control"
              onKeyUp={this.performSearch}
              value={this.state.value}
              onClick={this.handleClick}
              onChange = {this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  },

});

var ImageContainer = React.createClass ({
  render: function(){
    var imgResult;
    var styleA = {width:240};
    var styleImg = {
      width:240,
      height:150
    };
    if (this.props.data.length>0) {
      imgResult = this.props.data.map(function(item){
        var url = item.images.fixed_height_downsampled.url;
        return(
          <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                <a className="thumbnail" href="#" style={styleA}>
                    <img className="img-responsive img-rounded" key={url} src={url} alt=""
                      style={styleImg}/>
                </a>
          </div>
        )
      });
    }
    return(
      <div className='container' id='img_gallery'>
        {/*<div className="row">
          <div className=*/}
        {imgResult}
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function(){
    return{
      data:[]
    };
  },
  showResult : function(data){
		this.setState({
      data:data
		});
	},
  getSearchResult: function(query){
    $.ajax({
			type : "GET",
			dataType : "json",
			url : base_url+query ,
			success : function(response){
				// console.log(response.status);
				console.log(response.data);
        if (response) {
          this.showResult(response.data);
        }
			}.bind(this),
			error : function(XMLHttpRequest, status, error){
				console.log(status + "\n" + error);
			}
		});
  },
  componentDidMount: function() {
    this.getInitialState();
  },
  render: function(){
    return (
      <div>
        <br />
        <SearchBar search={this.getSearchResult}/>
        <br />
        <ImageContainer data={this.state.data} />
      </div>
    );
  }
});

ReactDOM.render( <App/> , document.getElementById ('app'));

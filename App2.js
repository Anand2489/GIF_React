import React from 'react'

const App2 = React.createClass({
  getInitialState: function(){
   return {data: []};
  },
  componentDidMount: function() {
    this.serverRequest = $.getJSON(this.props.url,{
        type: "GET",
        dataType: "json",
        cache: true
      })
    .done(function( data ) {
      this.setState({data:data});
    }.bind(this))
    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render(){
    console.log(this.state.data.data);
    // return <div>
    //   <img src='./searchIcon.png' />
    //   <img src='./searchIcon.png' />
    // </div>;

    var links=this.state.data.data.map(function(item) {
      var image_url = item.images.fixed_height_downsampled.url;
      if (image_url.trim()){
        // console.log(typeof image_url);
          return <img src={image_url} key={image_url}/>;
          // $( '<img>' ).attr('src',image_url).css({"width":"240px","height":"150px"});
      }
      return <img src='./searchIcon.png' />;
    }.bind(this));
    return <div>{links}</div>;
  }
});


export default App2

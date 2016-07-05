import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';


ReactDOM.render(<App />, document.getElementById('search'));
ReactDOM.render(<App2 url="http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC"/>,
                  document.getElementById('img_gallery'));

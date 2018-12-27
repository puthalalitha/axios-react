import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      isLoaded: false,
    }
  
  }
  componentDidMount(){
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=PiOvzcUH0mefbDwHsovIfRPCFUfj1Vdg&q=christmas+puppy&limit=10`)
    .then((response) => {
      const repose =response.data.data;
      console.log(repose);
      this.setState({
        isLoaded: true,
        gifs: repose,
      })
    });
  }

  render() {
    var { isLoaded, gifs } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="App">
          <div className="title">
            <Title title="Christmas Puppies"/>
          </div>
          <ul className="gifs">
            {gifs.map(gif => (
              <li key={gif.id}>
                <div class="parent">
                  <div class="gif">
                  <img class="animated-gif" 
                    src={gif.images.fixed_width.url} 
                    alt="Christmas Puppies" 
                  />
                  </div>
                </div>
              </li>
            ))};
          </ul>
          
        </div>
      );
    }
    
  }
}

export default App;


/*
var api = `https://api.giphy.com/v1/gifs/search?`
var apikey = &api_key=PiOvzcUH0mefbDwHsovIfRPCFUfj1Vdg
var query = &q=christmas+puppy
var limit = &limit=10
Host Url for api
api.giphy.com

url = api + apikey+ query

data.data[0].images.original.url

offset=10
Path 
/v1/gifs/search

q = christmas+puppy
api key: PiOvzcUH0mefbDwHsovIfRPCFUfj1Vdg
*/
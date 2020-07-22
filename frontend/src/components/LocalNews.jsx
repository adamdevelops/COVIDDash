import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles.css';

class LocalNews extends Component {
  constructor(props){
    super(props);

    this.state = {
      news_stories: "",
    }

    this.getData = this.getData.bind(this);
  }

  // route to api fetch
  // api/v1/test

  getData(){
    axios.get('https://cors-anywhere.herokuapp.com/https://coviddash-api.herokuapp.com/api/v1/test').then(response => {
        console.log(response);

        this.setState({news_stories: response.data.message});
    })
  }

  render(){
    return(
      <div id="local-news">
        <h1>Local News</h1>
        <div className="">
          {this.state.news_stories}
          <button onClick={this.getData}>Get Test Data</button>
        </div>
      </div>
    );
  }

}

  export default LocalNews;

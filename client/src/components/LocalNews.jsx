import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles.css';

class LocalNews extends Component {
  constructor(props){
    super(props);

    this.state = {
      local_news: [],
    }

    this.getData = this.getData.bind(this);
  }

  // route to api fetch
  // api/v1/test

  getData(){
    axios.get('https://cors-anywhere.herokuapp.com/https://coviddash-api.herokuapp.com/api/v1/test').then(response => {
        console.log(response);
        this.setState({othernews: response.data.message});
    })
  }

  componentDidMount() {
    axios.get("/api/news").then((response) => {
      console.log(response);
      this.setState({ local_news: response.data });
    });
  }

  render(){
    return(
      <div id="local-news">
        <h1>Local News</h1>
        <div className="">
          {this.state.local_news}
        </div>
      </div>
    );
  }

}

  export default LocalNews;

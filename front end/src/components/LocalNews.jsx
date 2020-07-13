import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles.css';

class LocalNews extends Component {
  constructor(props){
    super(props);


    this.getData = this.getData.bind(this);

  }

  // route to api fetch
  // api/v1/test

  getData(){
    axios.get('http://coviddash-api.herokuapp.com/api/v1/test').then(response => {
        console.log(response);
    })
  }

  render(){
    return(
      <div id="local-news">
        <h1>Local News</h1>
        <div className="">
          <button onClick={this.getData()}>Get Test Data</button>
        </div>
      </div>
    );
  }

}

  export default LocalNews;

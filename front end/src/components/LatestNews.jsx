import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

class LatestNews extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div id="latest-news">
        <h1>Latest News</h1>
        <div className="news-items-carousel">

        </div>
      </div>
    );
  }

}

  export default LatestNews;

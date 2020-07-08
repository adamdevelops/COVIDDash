import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

class LatestTweets extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div id="latest-tweets">
        <h1>Latest Tweets</h1>
        <div className="">

        </div>
      </div>
    );
  }

}

  export default LatestTweets;

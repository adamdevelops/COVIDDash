import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

class LatestTweets extends Component {
  constructor(props){
    super(props);

    this.state = {
      tweets: [{id: 1, body: 'Sample tweet'}],
    }

    this.renderTweets = this.renderTweets.bind(this);

  }

  renderTweets() {
    return this.state.tweets.map((tweet) => {
      return(
        <div className="tweet" key={tweet.id}>

        </div>
      )
    })
  }

  render(){
    return(
      <div id="latest-tweets">
        <h1>Latest Tweets</h1>
        <div className="">
          {this.renderTweets()}
        </div>
      </div>
    );
  }

}

  export default LatestTweets;

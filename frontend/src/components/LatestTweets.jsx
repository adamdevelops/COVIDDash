import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

class LatestTweets extends Component {
  constructor(props){
    super(props);

    this.state = {
      tweets: [
        {id: 1, username:'Twitter API', screename: 'TwitterAPI', profile_pic: '../profile_pic.jpg', test_img: 'https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg', body: 'Sample tweet', date:'4:19 PM · Oct 10, 2018'},
        {id: 1, username:'Twitter API', screename: 'TwitterAPI', profile_pic: '../profile_pic.jpg', test_img: 'https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg', body: 'Sample tweet', date:'4:19 PM · Oct 10, 2018'}
      ],
    }

    this.renderTweets = this.renderTweets.bind(this);

  }

  renderTweets() {
    return this.state.tweets.map((tweet) => {
      return(
        <div className="tweet" key={tweet.id}>
          <div className="tweet-profile">
            <img className="tweet-profile_pic" src={`${tweet.profile_pic}`}></img>
            <div className="tweet-wrapper">
              <span className="tweet-username">{tweet.username}
                <span className="tweet-screename">@{tweet.screename}</span>
              </span>
            </div>
          </div>
          <div className="tweet-body">
            {tweet.body}
          </div>
          <div className="tweet-date">
            {tweet.date}
          </div>
        </div>
      )
    })
  }

  // {`${tweet.profile_pic}`}

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

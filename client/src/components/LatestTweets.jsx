import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles.css';

class LatestTweets extends Component {
  constructor(props){
    super(props);

    this.state = {
      tweets: [
        {id: 1, username:'Twitter API', screename: 'TwitterAPI', profile_pic: '../profile_pic.jpg', test_img: 'https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg', body: 'Sample tweet', date:'4:19 PM · Oct 10, 2018'},
        {id: 2, username:'Twitter API', screename: 'TwitterAPI', profile_pic: '../profile_pic.jpg', test_img: 'https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg', body: 'Sample tweet', date:'4:19 PM · Oct 10, 2018'}
      ],
      tweet_news: [],
    }

    this.renderTweets = this.renderTweets.bind(this);

  }

  componentDidMount() {
    axios.get("/api/news").then((response) => {
      console.log(response.data);
      this.setState({ tweet_news: response.data });
    });
  }

  renderTweets() {
    return this.state.tweet_news.map((tweet) => {
      return(
        <div className="tweet" key={tweet.id}>
          <div className="tweet-profile">
            <img className="tweet-profile_pic" src={`${tweet.user.profile_image_url_https}`}></img>
            <div className="tweet-wrapper">
              <span className="tweet-username">{tweet.user.name}
                <span className="tweet-screename">@{tweet.user.name}</span>
              </span>
            </div>
          </div>
          <div className="tweet-body">
            {tweet.text}
          </div>
          <div className="tweet-date">
            {tweet.created_at}
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

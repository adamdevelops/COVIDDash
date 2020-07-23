import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Carousel from 'react-bootstrap/Carousel';

import '../styles.css';

class LatestNews extends Component {
  constructor(props){
    super(props);

    this.state = {
      news_stories: [{id: 1, img: '../news1.png', title: 'First News', description: 'yo yo gabba gabba'}, {id: 2, img: '../news1.png', title: 'Second News', description: 'yo yo gabba gabba'}],
    }

  }

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    return(
      <div id="latest-news">
        <h1 className="latest-news-title">Latest News</h1>
        <Carousel>
          {
            this.state.news_stories.map((news) => {
              return(
                <Carousel.Item>
                  <img
                    className="d-block w-100 news-img"
                    src={`${news.img}`}
                    alt="First slide"
                  />
                <Carousel.Caption>
                  <div className="news-info">
                    <h3 className="news-title transparent-bkgnd">{news.title}</h3>
                    <p className="news-description transparent-bkgnd">{news.description}</p>
                  </div>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
          }

        </Carousel>
      </div>
    );
  }
}

  export default LatestNews;

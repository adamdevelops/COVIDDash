import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Carousel from 'react-bootstrap/Carousel';

import '../styles.css';

class LatestNews extends Component {
  constructor(props){
    super(props);

    this.state = {
      news_stories: [{id: 1, img: '../news1.png', title: 'Can convalescent plasma treat coronavirus?', description: 'Phlebotomist Jenee Wilson carries COVID-19 convalescent plasma from a donor at Bloodworks ... press to encourage people who survived Covid-19 to donate plasma to help those who are sick.'},
      {id: 2, img: '../news2.jpg', title: 'How to Protect Yourself & Others | CDC', description: 'Here are some tips to protect tips'}],
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
                <Carousel.Item key={news.id}>
                  <img
                    className="d-block news-img"
                    src={`${news.img}`}
                    alt="First slide"
                  />
                <Carousel.Caption>
                  <div className="news-info">
                    <h3 className="news-title transparent-bkgnd">{news.title}</h3>
                    <p className="latestnews-description transparent-bkgnd">{news.description}</p>
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

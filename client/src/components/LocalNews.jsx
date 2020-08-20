import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles.css';

class LocalNews extends Component {
  constructor(props){
    super(props);

    this.state = {
      local_news: [
        {id: 1, title: 'Scientists See Signs of Lasting Immunity to Covid-19, Even After Mild Infections', blurb: 'New research indicates that human immune system cells are storing information about the coronavirus so they can fight it off again.'},
        {id: 2, title: 'New York Is Positioned to Reopen Schools Safely, Health Experts Say', blurb: 'Transmission, even in New York City, is well below thresholds experts say are safe, but issues like adequate ventilation to combat aerosol spread of the virus remain.'}],
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

  // componentDidMount() {
  //   axios.get("/api/news").then((response) => {
  //     console.log(response);
  //     this.setState({ local_news: response.data });
  //   });
  // }

  render(){
    return(
      <div id="local-news">
        <h1>Local News</h1>
          {
            this.state.local_news.map((news) => {
              return(
                <div className="news-item" key={news.id}>
                  <h3 className="localnews-title transparent-bkgnd">{news.title}</h3>
                  <p className="localnews-description transparent-bkgnd">{news.blurb}</p>
                </div>
              )
            })

          }
      </div>
    );
  }

}

  export default LocalNews;

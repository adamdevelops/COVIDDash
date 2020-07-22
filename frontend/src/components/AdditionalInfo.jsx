import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

class AdditionalInfo extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div id="helpful-info">
        <h1>Helpful Info</h1>
        <div className="helpful-info-items">
          <ul>
            <li><a href="">Cleaning tips</a></li>
            <li><a href="">Stats</a></li>
            <li><a href="">Safety</a></li>
          </ul>
        </div>
      </div>
    );
  }

}

  export default AdditionalInfo;

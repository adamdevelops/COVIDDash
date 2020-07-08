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
        <div className="">
          <ul>
            <li>Cleaning tips</li>
            <li>Stats</li>
            <li>Safety</li>
          </ul>
        </div>
      </div>
    );
  }

}

  export default AdditionalInfo;

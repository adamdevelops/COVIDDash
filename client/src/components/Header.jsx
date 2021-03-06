import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {showSearchBar: false};

  }

  render(){
    return(
      <div id="header">
        <div id="logo-area" className="logo-area">
          <h1 className="logo">COVID DASH</h1>
        </div>
        <div id="user-menu" className="menu">
          <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Tweets</li>
          </ul>
        </div>
      </div>
    );
  }

}

  export default Header;

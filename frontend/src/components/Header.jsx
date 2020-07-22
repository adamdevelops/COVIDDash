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
        <div id="logo-area">
          <h1 className="logo">COVID DASH</h1>
        </div>
      </div>
    );
  }

}

  export default Header;

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
        <div id="user-menu">
          <i className="user-icon fa fa-search fa-2x pointer" aria-hidden="true"></i>
          <Link className="pointer" to="/account"><i className="user-icon fa fa-user-circle fa-2x pointer" aria-hidden="true"></i></Link>
          <Link className="pointer" to="/checkout"><i className="user-icon fa fa-shopping-bag fa-2x pointer no-pad-right" aria-hidden="true"></i></Link>
        </div>
      </div>
    );
  }

}

  export default Header;

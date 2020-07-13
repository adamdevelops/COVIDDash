import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Header from './Header';
import Home from './Home';
import Footer from './Footer';




const App = () => {

  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
    </Router>

  );
}

export default App;

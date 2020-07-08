import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Header from './Header';
import LatestNews from './LatestNews';
import KnowledgeSection from './KnowledgeSection';
import Footer from './Footer';




const App = () => {

  return (
    <Router>
      <Header />
      <LatestNews />
      <KnowledgeSection />
      <Footer />
    </Router>

  );
}

export default App;

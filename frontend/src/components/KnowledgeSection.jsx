import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

import AdditionalInfo from './AdditionalInfo';
import LatestTweets from './LatestTweets';
import LocalNews from './LocalNews';



const KnowledgeSection = () => {

  return (
    <div className="relevant-info">
      <AdditionalInfo />
      <LatestTweets />
      <LocalNews />
    </div>
  );
}

  export default KnowledgeSection;

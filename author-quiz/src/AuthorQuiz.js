import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Hero from './Hero.js';
import Footer from './Footer.js';
import Turn from './Turn.js';

function AuthorQuiz({turnData, highlight, onAnswerSelected}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {... turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;

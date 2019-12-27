import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Hero from './Hero.js';
import Footer from './Footer.js';
import Turn from './Turn.js';
import {Link} from 'react-router-dom';

function AuthorQuiz({turnData, highlight, onAnswerSelected}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {... turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <p><Link to='/add'>Add an author</Link></p>
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;

import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Hero from './Hero.js';
import Footer from './Footer.js';
import Turn from './Turn.js';

function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {... turnData}/>
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;

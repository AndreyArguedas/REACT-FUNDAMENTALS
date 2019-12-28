import React from 'react';
import './App.css';
import './bootstrap.min.css';
import {connect} from 'react-redux';
import Hero from './Hero.js';
import Footer from './Footer.js';
import Turn from './Turn.js';
import Continue from './Continue.js';
import {Link} from 'react-router-dom';

let mapStateToProps = (state) => {
  return {
    turnData: state.turnData,
    highlight: state.highlight
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAnswerSelected: answer => {
      dispatch({type: 'ANSWER_SELECTED', answer})
    },
    onContinue: () => {
      dispatch({type: 'CONTINUE'})
    }
  }
}

const AuthorQuiz = connect(mapStateToProps, mapDispatchToProps)(
  ({turnData, highlight, onAnswerSelected, onContinue}) => {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {... turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue show={highlight === 'green'} onContinue={onContinue}/>
      <p><Link to='/add'>Add an author</Link></p>
      <Footer/>
    </div>
  );
});

export default AuthorQuiz;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/Mark_Twain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The adventures of Huckleberry Finn', 'Life on the Missisipi', 'Roughing it']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/Charles_Dickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'Oliver Twist', 'Great Expectations']
    },
    {
        name: 'Shakespeare',
        imageUrl: 'images/authors/Shakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

let getTurnData = (authors) => {
    const allBooks = authors.reduce((p, c) => {
        return p.concat(c.books);
    }, []);

    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);
    
    return {
        books: fourRandomBooks,
        author: authors.find( author => author.books.some( title => title === answer))
    }
}

const state = {
    turnData: getTurnData(authors),
    highlight: ''
}

let onAnswerSelected = (answer) => {
    const isCorrect = state.turnData.author.books.some( book => book === answer)
    state.highlight = isCorrect ? 'green' : 'red'
    render()
}

let render = () => ReactDOM.render(<AuthorQuiz {... state} onAnswerSelected={onAnswerSelected}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
render()
serviceWorker.unregister();

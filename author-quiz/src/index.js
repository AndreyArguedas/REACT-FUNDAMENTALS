import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import * as serviceWorker from './serviceWorker';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import {shuffle, sample} from 'underscore';

let authors = [
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

let reducer = (state = { turnData: getTurnData(authors), highlight: '',authors : authors}, action) => {
    switch(action.type) {
        case 'ANSWER_SELECTED': 
            const isCorrect = state.turnData.author.books.some( book => book === action.answer)
            return Object.assign({}, state, {highlight: isCorrect ? 'green' : 'red'})
        case 'CONTINUE':
            return Object.assign({}, state, {
                turnData: getTurnData(state.authors),
                highlight: '',
            })
        default: return state;
    }
}

let store = Redux.createStore(reducer);

let App = () => {
    return <ReactRedux.Provider store={store}><AuthorQuiz/></ReactRedux.Provider>
}

let AddAuthorFormWrapper = () => {
    return <AddAuthorForm authors={authors}/>
}

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/add" component={AddAuthorFormWrapper} />
    </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

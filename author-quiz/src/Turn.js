import React from 'react';
import Book from './Book.js';

function Turn({author, books, highlight, onAnswerSelected}) {
    return (
      <div className={"row turn " + highlight}> 
         <div className="col-4 offset-1">
             <img src={author.imageUrl} className="authorimage" alt="Author"/>
         </div>
         <div className="col-6">
            {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}/>)}
         </div>
      </div>
    )
}

export default Turn;
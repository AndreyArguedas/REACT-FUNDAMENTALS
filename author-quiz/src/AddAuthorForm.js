import React from 'react';
import "./AddAuthorForm.css";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';


class AuthorForm extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            name: "",
            imageUrl: "",
            books: [],
            bookTemp: ''

        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handleAddBook(event) {
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        })  
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="AddAuthorFormInput">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
            </div>
            <div className="AddAuthorFormInput">
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}></input>
            </div>
            <div className="AddAuthorFormInput">
                {this.state.books.map(book => <p key={book}> {book}</p>)}
                <label htmlFor="bookTemp">Books</label>
                <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}></input>
                <input type="button" value="+" onClick={this.handleAddBook}></input>
            </div>
            <input type="submit" value="Add"></input>
        </form>
    }
}
function AddAuthorForm({onAddAuthor}) {
    return (
      <div className="AddAuthorForm">
         <h1>Add Author</h1>
         <AuthorForm onAddAuthor={onAddAuthor}/>
      </div>
    );
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        onAddAuthor : (author) => {
            dispatch({type: 'ADD_AUTHOR', author})
            props.history.push('/');
        }
    };
}

export default withRouter(connect(() => ({ }), mapDispatchToProps)(AddAuthorForm));
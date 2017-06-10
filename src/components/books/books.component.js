import React from 'react';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookPartial from './partials/books.partial';

const mapStateToProps = (state) =>{
    return{
        books: state.books.booksPage 
    };
}

class  BooksComponent extends React.PureComponent{

    componentDidMount(){
        this.props.dispatch( {
            type: 'LOAD_BOOKS',
            payload: 'idetert'
        });

    }

    render() {
        var books = this.props.books;
        var mappedBooks = 
                    books.map( (book, index)=> {
                    return <BookPartial  key= {index}  author={book.author} title={book.title} />
                });

        if (books){
            return(
            <div>
                   {mappedBooks}
            </div>
            );
        }else{
            return (<div>No Books!</div>);
        }
    }
}

export default withRouter (
    connect(mapStateToProps)(BooksComponent)
    );
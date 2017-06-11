import React from 'react';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loadBooksByHTTP} from './actions/books-acions';
import BookPartial from './partials/books.partial';

const mapStateToProps = (state) =>{
    return{
        books: state.books.booksPage 
    };
}

const mapDispatchToProps= (dispatch)=> ({
    loadBooks: ()=>{
        dispatch (loadBooksByHTTP());
    }
});

class  BooksComponent extends React.PureComponent{

    componentDidMount(){
        this.props.loadBooks();
    }

    render() {
        var books = this.props.books;
        var mappedBooks = 
                    books.map( (book, index)=> {
                    return( 
                    <BookPartial  
                        key= {index} 
                        author={book.author} 
                        bookimg = {book.img}
                        title={book.intro_text}
                    />)
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
    connect(mapStateToProps, mapDispatchToProps)(BooksComponent)
    );
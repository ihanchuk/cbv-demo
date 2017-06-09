import React from 'react';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) =>{
    return{
        books: state.booksPage 
    };
}

const BooksComponent = (props)=>{
    return (
        <div className="container">
        <div className="row">
            {props.books.map( (book, i) =>{
                    return( 
                        <div className="col-lg-6 book" key={i}>
                            <h4>Book author::  {book.author} </h4>
                            <h4>Book title:: {book.title} </h4>
                        </div>);
            })}
            </div>
        </div>
    );
}

export default withRouter (
    connect(mapStateToProps)(BooksComponent)
    );
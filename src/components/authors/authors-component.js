import React from 'react';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loadAuthorsByHTTP} from './actions/authors-actions';
import AuthorPartial from './partials/author-partial';

const mapStateToProps = (state) =>{
    return{
        authors: state.authors.authorsPage 
    };
}

const mapDispatchToProps= (dispatch)=> ({
    loadAuthors: ()=>{
        dispatch (loadAuthorsByHTTP());
    }
});

class  AuthorsComponent extends React.PureComponent{

    componentDidMount(){
        this.props.loadAuthors();
    }

    render() {
        var authors = this.props.authors;
        var mappedAuthors = 
                    authors.map( (author, index)=> {
                    return( 
                    <AuthorPartial  
                        key= {index} 
                        first_name={author.meta.first_name} 
                        last_name={author.meta.last_name} 
                        authorimg = {author.img}
                        authorid={author._id}
                    />)
                }); 

        if (authors){
            return(
            <div>
                   {mappedAuthors}
            </div>
            );
        }else{
            return (<div>No Books!</div>);
        }
    }
}

export default withRouter (
    connect(mapStateToProps, mapDispatchToProps)(AuthorsComponent)
    );
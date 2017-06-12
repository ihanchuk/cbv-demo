import React from 'react';
import {Link} from 'react-router-dom';

const BookPartial = (props) => {
    const id = props.bookid;
    return(
        <div>
            <h6>Author:: {props.author.meta.first_name} {props.author.meta.last_name} </h6>
            <h6>Author ID:: {props.author._id} </h6>
            <Link to={`/book/${id}`}><img src={props.bookimg} alt={props.title} /></Link>
            <h5>{props.title}</h5>
     </div>
    );
 }

export default BookPartial;
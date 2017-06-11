import React from 'react';

const BookPartial = (props) => {
    return(
        <div>
            <h6>Author:: {props.author.meta.first_name} {props.author.meta.last_name} </h6>
            <h6>Author ID:: {props.author._id} </h6>
            <img src={props.bookimg} alt={props.title} />
            <h5>{props.title}</h5>
     </div>
    );
 }

export default BookPartial;
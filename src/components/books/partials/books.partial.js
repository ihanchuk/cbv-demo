import React from 'react';

const BookPartial = (props) => {
    return(
        <div>
            <h3>{props.author}</h3>
            <h3>{props.title}</h3>
     </div>
    );
 }

export default BookPartial;
import React from 'react';
import {Link} from 'react-router-dom';

const AuthorPartial = (props) => {
    const id = props.authorid;
    return(
        <div>
            <h6>Author:: {props.first_name}{props.last__name}</h6>
            <img src={props.authorimg} alt="" />
            <Link to={`/author/${id}`}>Books</Link>
     </div>
    );
 }

export default AuthorPartial;
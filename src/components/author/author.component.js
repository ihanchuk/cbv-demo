import React from 'react';

const AuthorComponent = (props)=>{
    return (
        <div>
            <h3>ID: {props.match.params.id}</h3>
        </div>
    );
}

export default AuthorComponent;
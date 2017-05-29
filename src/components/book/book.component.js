import React from 'react';

const BookComponent = (props) => (
  <div>
    <h3>ID: {props.match.params.id}</h3>
  </div>
)

export default BookComponent;
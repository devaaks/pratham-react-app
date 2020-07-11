import React from 'react';

const person = (props) => {
    return <p>Name: <strong>{props.name}</strong> <small>Age:{props.age}</small></p>
};

export default person;
import React from 'react';
import './Person.css'

const person = (props) => {
    return <div className='Person'>
            <p> Name: <strong>{props.name}</strong></p>
            <p> <small>Age:{props.age}</small></p>
        </div>
};

export default person;
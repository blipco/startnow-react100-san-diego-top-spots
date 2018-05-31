import React from 'react';
export default props => (
    <div className='card mt-4 p-3'>
        <h4>{props.name}</h4>
        <p>{props.description}
        </p>
        <a className="btn btn-outline-danger" 
           href={`https://maps.google.com/?q=${props.location}`}>
           View Location</a>
    </div>
);
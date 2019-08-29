import React from 'react';
import './Card.css';

const Card=(props)=>{
return (

    <div className="card">
        <h4>{props.heading}</h4>
        <p>{props.para}</p>
    </div>
)
}
export default Card
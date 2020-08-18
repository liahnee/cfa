import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = props => {

    return (
        <div className="card">
            <FontAwesomeIcon icon={props.icon.icon} color={props.icon.color} size={props.icon.size} />
            <span className="title"> {props.title} </span>
            <img src={props.img.src} alt={props.img.alt} />
            <p className="card-desc"> {props.desc} </p>
        </div>
    )
};

export default Card;


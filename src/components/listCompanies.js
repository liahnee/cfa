import React from 'react';

const CoLogos = props => {

    return (
        <div className="co-list">
            <div className="title">
                <span>{props.title}</span>
            </div>
            <div className="co-list-container">
                {props.logos.map(src => <img src={src} alt={props.title + " logo"} />)}
            </div>
        </div>
    )
};

export default CoLogos;
import React from 'react';
import "./Card.css";

function Card({poster,title, date}) {
    return (
        <div className="card card-glass-bg">
            <img src={poster} className="poster" alt={title}/>
            <div className="info">
                <p className="title">{title}</p>
                <p className="date">{date}</p>
            </div>
        </div>
    )
}

export default Card;

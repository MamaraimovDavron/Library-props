import React from "react";
import './style/style.css'

const Card = (props) => {
    return(
        <div className="book-card">
                <h2>{props.name}</h2>
                <img src={props.imgUrl} alt="" />
                <p className="author">{props.author}</p>
                <p className="genre">{props.genre}</p>
                <p className="number">{props.number}</p>
                <p className="date">{props.date}</p>
        </div>
    );
}

export default Card;
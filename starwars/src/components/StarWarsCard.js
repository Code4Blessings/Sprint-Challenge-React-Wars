import React from "react";
import "./StarWars.css";
import Styled from "styled-components";

const StarWarsCard = (props) => {
    const {name, gender, haircolor, height} = props;
    return (
        <div className="star-card" >
            <h2>{name}</h2>
            <p>{gender}</p>
            <p>{haircolor}</p>
            <p>{height}</p>
        </div>
    )
}

export default StarWarsCard;
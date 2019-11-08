import React from "react";
import "./StarWars.css";
import styled from "styled-components";

const StarCard = styled.div`
    margin: 30px;
    border: 4px solid #443e3e;
    padding: 20px;
    height: 300px;
    width: 300px;
    background-color: #CF9A62;
`;

const StarCardH2 = styled.h2`
    font-size: 40px;
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
`;

const StarCardP = styled.p `
    font-size: 25px;
`;

const StarWarsCard = (props) => {
    const {name, gender, haircolor, height} = props;
    return (
        <StarCard>
            <StarCardH2>{name}</StarCardH2>
            <StarCardP>{gender}</StarCardP>
            <StarCardP>{haircolor}</StarCardP>
            <StarCardP>{height}</StarCardP>
        </StarCard>
    )
}

export default StarWarsCard;
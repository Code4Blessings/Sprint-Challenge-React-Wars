import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import styled from "styled-components";


const StarWarsCast = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const StarWars = () => {

    const [people, setPeople] = useState([]);
    const API = "https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/"

    useEffect(() => {
        axios
        .get(API)
        .then((response) => {
            setPeople(response.data.results);
            console.log(response.data.results);
        })
        .catch((error) => {
            console.log("Data has returned an error", error);
        })
    },[])
    
    return (
      <StarWarsCast>
        {people.map((person, index) => {
        return (
          <StarWarsCard
            key={index}
            name={person.name}
            gender={person.gender}
            height={person.height}
          />
        );
      })}
      </StarWarsCast>
      
    

    );
}

export default StarWars;
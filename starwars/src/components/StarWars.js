import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";




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
      <div className="starWars-cast">
        {people.map((person, index) => {
        return (
          <StarWarsCard
            key={index}
            name={person.name}
            gender={person.gender}
            haircolor={person.haircolor}
            height={person.height}
          />
        );
      })}
      </div>
      
    

    );
}

export default StarWars;
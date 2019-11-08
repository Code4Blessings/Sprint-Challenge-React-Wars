import React from 'react';
import StarWars from './components/StarWars';
import styled from "styled-components";
import './App.css';

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.h1 `
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-size: 65px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppContainer>
      <Header className="Header">React Wars</Header>
      <StarWars />
    </AppContainer>
  );
}

export default App;

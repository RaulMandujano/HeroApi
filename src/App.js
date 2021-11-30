import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route } from "react-router-dom";
import MarvelContexts from "./contexts/MarvelContexts";
import ButtonAppBar from "./components/ButtonAppBar";
import BasicTabs from "./components/BasicTabs";
import Container from '@mui/material/Container';
import HeroDetails from  './components/HeroDetails';

import Welcome from "./components/Welcome"
import Login from "./components/login.component"
import SignUp from "./components/signup.component"



const App = () => {

  return (
    <div>
      <ButtonAppBar />
      <BasicTabs/>

      <Route path="/"><Welcome/></Route>
      <Route path="/heroes"><MarvelContexts/></Route>
      
      <Container maxWidth="sm">
      <Route path="/herodetails/:id"><HeroDetails/></Route>
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={SignUp} />
      </Container>
      
    </div>
  )
};

export default App;

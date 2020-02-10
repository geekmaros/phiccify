import React from 'react';
import {Switch, Route } from 'react-router-dom'
import './App.sass';
import HomePage from "./pages/homepage/homepage.component";
import Hats from './pages/hats/hats.component'


function App() {
  return (
    <div>
      <Switch>
        <Route exact  path="/" component={HomePage}/>
        <Route   path="/shop/hats" component={Hats}/>
        <Route   path="/hats/:id" component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;

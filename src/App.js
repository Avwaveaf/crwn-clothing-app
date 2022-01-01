import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./Components/pages/Homepage/homepage.component";

const HatsPage = (props) => (
  <div className=''>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

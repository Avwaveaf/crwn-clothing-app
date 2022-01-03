import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./Components/pages/Homepage/homepage.component";
import ShopPage from "./Components/pages/shop/shop.component";
import { Header } from "./Components/header/header.component";
import { SignInSignUp } from "./Components/pages/signin-signup/signin-signup.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./Components/pages/Homepage/homepage.component";
import ShopPage from "./Components/pages/shop/shop.component";
import { Header } from "./Components/header/header.component";
import { SignInSignUp } from "./Components/pages/signin-signup/signin-signup.component";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: ""
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user.displayName);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

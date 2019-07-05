import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Post from "./pages/posts";
import Index from "./pages/index";
import MyProfile from "./pages/login";

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
          <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={Post} />
              <Route exact path="/index" component={Index} />
              <Route exact path="/login" component={MyProfile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

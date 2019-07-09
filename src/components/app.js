import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import ItemContainer from "./pages/posts";
import Index from "./pages/index";
import MyProfile from "./pages/login";

//TODO
//Add id of articles to homepage(first three)
//Create Login page
//Create user abilities for following
//Fix stupid rerendering memory leak

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
          <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/index" component={ItemContainer} />
              <Route exact path="/posts" component={Index} />
              <Route exact path="/login" component={MyProfile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

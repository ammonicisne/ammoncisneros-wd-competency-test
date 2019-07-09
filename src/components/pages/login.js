import React, { Component } from "react";

import LoginForm from "../login-data/login-data";

export default class Auth extends Component {
    constructor(props) {
      super(props);
  
      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
      this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }
  
    handleSuccessfulAuth() {
      this.props.handleSuccessfulLogin();
      this.props.history.push("/");
    }
  
    handleUnsuccessfulAuth() {
      this.props.handleUnsuccessfulLogin();
    }
  
    render() {
      return (
        <div className="auth-page-wrapper">
          <div
            className="left-column"
            style={{
            //   backgroundImage: `url(${loginImg})`
            }}
          />
          <div className="right-column">
            <LoginForm
              handleSuccessfulAuth={this.handleSuccessfulAuth}
              handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
            />
          </div>
        </div>
      );
    }
  }
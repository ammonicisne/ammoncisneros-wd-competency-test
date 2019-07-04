import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="navbar">
      <div className="nav-link-wrapper">
        <NavLink to="/" activeClassName="nav-link-active">
          Home
        </NavLink>
      </div>

      <div className="nav-link-wrapper">
        <NavLink to="/index" activeClassName="nav-link-active">
          index
        </NavLink>
      </div>

      <div className="nav-link-wrapper">
        <NavLink to="/login" activeClassName="nav-link-active">
          login
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import nikola from "../../images/nikola.png"

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
      <div className="subNavbar">
        <div className="nav-link-wrapper">
          <div className="homeNav">
            <NavLink to="/">
              <img src = {nikola}  alt="nikola motor company" />
            </NavLink>
          </div>
        </div>
        <div className="nav-link-wrapper">
          <div className="indexNav">        
            <NavLink to="/index" activeClassName="nav-link-active">
              INDEX
            </NavLink>
          </div>
        </div>
        <div className="nav-link-wrapper">
          <div className="postsNav">        
            <NavLink to="/posts" activeClassName="nav-link-active">
              POST
            </NavLink>
          </div>
        </div>
        <div className="nav-link-wrapper-pro">
          <div className="profileNav">        
            <NavLink to="/login" activeClassName="nav-link-active">
              MY PROFILE
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
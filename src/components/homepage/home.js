// Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="app-header">
      <div className="container">
        <div className="nav-header">
          <div className="nav-left">
            <NavLink to={"/"} className="nav-logo">
              Your Logo
            </NavLink>
          </div>
          <nav className="nav-right">
            <NavLink to={"/reactForm?gender=men"} activeClassName="active">
              ReactForm
            </NavLink>
            <NavLink to={"/seat?gender=women"} activeClassName="active">
              FlightSeats
            </NavLink>
            <NavLink
              to={"/compo1"}
              activeClassName="active"
            >
              Crausal
            </NavLink>
            <NavLink to={"/Context"} activeClassName="active">
              ContextAPI
            </NavLink>
            <NavLink to={"/compo2"} activeClassName="active">
              GlobalContext
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

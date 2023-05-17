import React from "react";
import { Outlet, Link } from "react-router-dom";

//use the svg as a React component
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/auth">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Login
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

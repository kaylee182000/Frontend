import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>navigate</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;

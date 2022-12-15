import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
  return (
      <div id="navbar__container">
        <Link to="/"> Home </Link>
        <Link to="/library"> Library </Link>
        <Link to="/about"> About </Link>
      </div>
  )
}

export default NavBar;
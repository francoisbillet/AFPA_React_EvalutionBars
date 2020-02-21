import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className="list-header">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/me">
          <li>Me</li>
        </Link>
      </ul>
      <hr />
    </header>
  );
};

export default Header;

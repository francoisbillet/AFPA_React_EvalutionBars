import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="list-header">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/me">
        <li>Me</li>
      </Link>
    </ul>
  );
};

export default Header;

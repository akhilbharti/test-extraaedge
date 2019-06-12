import React from "react";
// import { Link } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="item">
        <img src={logo} style={{ width: "10em" }} />
      </div>
      <div className="item" style={{ top: "-25px", left: "10%" }}>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            style={{ width: "70em" }}
          />
          <i className="search link icon" />
        </div>
      </div>
      {/* <div className="right menu" /> */}
    </div>
  );
};

export default Navbar;

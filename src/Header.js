import React from "react";
import { Link } from "react-router-dom";

// import Dashboard from "./Dashboard";

const Header = () => {
  return (
    <div classname="eight wide column">
      <div className="ui vertical   menu">
        <Link className="  item" to={"/"}>
          upcoming lsit
        </Link>
        <Link className=" active item" to={"/Dashboard"}>
          Lead lsit
        </Link>
        <Link className=" item" to={"/"}>
          Application List
        </Link>
        <Link className=" item" to={"/"}>
          My Activites
        </Link>
        <Link className=" item" to={"/"}>
          Fail lrads
        </Link>
        <Link className=" item" to={"/"}>
          campaign
        </Link>
        <Link className=" item" to={"/"}>
          chat list
        </Link>
        <Link className=" item" to={"/"}>
          Reports
        </Link>
        <Link className=" item" to={"/"}>
          Setttings
        </Link>
      </div>
    </div>
  );
};

export default Header;

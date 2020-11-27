import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <Link to="/" className="nav-link sopra">
              <i className="fa fa-home mr-2 "></i>
              <strong>Home</strong>
            </Link>
          </div>
        </div>
        <div className=" row">
          <div className="col">
            <Link to="/album" className="nav-link sopra">
              <i className="fa fa-search mr-2"></i>
              <strong>Album</strong>
            </Link>
          </div>
        </div>
        <div className=" row">
          <div className="col">
            <Link to="/" className="nav-link sopra">
              <i className="fas fa-book mr-2 "></i>
              <strong>Your Library</strong>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;

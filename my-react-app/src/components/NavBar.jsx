import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <a href="#" className="nav-link sopra">
              <i className="fa fa-home mr-2 "></i>
              <strong>Home</strong>
            </a>
          </div>
        </div>
        <div className=" row">
          <div className="col">
            <a href="#" className="nav-link sopra">
              <i className="fa fa-search mr-2"></i>
              <strong>Search</strong>
            </a>
          </div>
        </div>
        <div className=" row">
          <div className="col">
            <a href="#" className="nav-link sopra">
              <i className="fas fa-book mr-2 "></i>
              <strong>Your Library</strong>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;

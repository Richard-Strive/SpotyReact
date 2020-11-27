import React, { Component } from "react";

class FooTer extends Component {
  render() {
    return (
      <>
        <nav className="navbar fixed-bottom navbar-expand-lg bg-dark footah">
          <div className="col">
            <div className="row">
              <div className="col container">
                <div className="card" style={{ width: "10%;" }}>
                  <img
                    src="/images/R-382673-1539613207-2607.jpeg.jpg"
                    width="100%"
                    alt="..."
                  />
                </div>
                <div className="col container">
                  <div className="card">
                    <div className="card-body ">
                      <p className="card-text">
                        <a href="#" style={{ color: "white;" }}>
                          Song For My Father
                        </a>
                        <br />
                        <a href="#">
                          <small> Horace Silver</small>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col container d-flex justify-content-start">
                  <a className="mr-3 mr-3" href="#">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="mr-3 mr-3" href="#">
                    <i className="fas fa-tablet-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col text-center ">
            <div className="mb-2 align-middle">
              <a href="#" className="mr-2 ml-2">
                <i className="fas fa-random"></i>
              </a>
              <a href="#" className="mr-2 ml-2 sideplay">
                <i className="fas fa-backward"></i>
              </a>
              <a href="#" className="mr-2 ml-2 play">
                <i className="fas fa-play"></i>
              </a>
              <a href="#" className="mr-2 ml-2 sideplay">
                <i className="fas fa-forward"></i>
              </a>
              <a href="#" className="mr-2 ml-2">
                <i className="fas fa-redo-alt"></i>
              </a>
            </div>

            <div className="progress align-middle " style={{ height: "1px;" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "12.5%;" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="col d-flex justify-content-end ">
            <div
              className="progress align-self-center"
              style={{ height: "1px;", width: "20%;" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "12.5%;" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default FooTer;

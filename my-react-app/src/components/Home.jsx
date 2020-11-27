import React, { Component } from "react";
import { Row } from "react-bootstrap";

class home extends Component {
  render() {
    return (
      <Row>
        <div className="col-10 offset-2" id="main">
          <div className="jumbotron jumbotron-fluid text-center d-flex flex-column justify-content-between">
            <div className="container">
              <h6>
                <small> 1,000,000 MONTHLY LISTENERS</small>
              </h6>
              <h1 className="display-4">
                <strong>Queen</strong>
              </h1>
              <p className="lead">
                <a className="mr-2 ml-2 btn" href="#">
                  PLAY
                </a>
                <a className="mr-2 ml-2 btn follow" href="#">
                  FOLLOW
                </a>
                <a className="mr-2 ml-2 punti" href="#">
                  <strong>. . .</strong>
                </a>
              </p>
            </div>
          </div>
          <div className="container-fluid mark mb-5">
            <ol className="list-group list-group-horizontal nav">
              <li
                className="nav-item mr-2 ml-2"
                data-target=" #carouselExampleIndicators"
                data-slide-to="0"
              >
                <div className="col">
                  <a className="nav-link " onclick="styleClick(event)" href="#">
                    OVERVIEW
                  </a>
                  <div className="underLine d-block"> </div>
                </div>
              </li>
              <li
                className="nav-item mr-2 ml-2"
                data-target=" #carouselExampleIndicators"
                data-slide-to="1"
              >
                <div className="col">
                  <a className="nav-link " onclick="styleClick(event)" href="#">
                    RELATED ARTISTS
                  </a>
                  <div className="underLine d-none"></div>
                </div>
              </li>
              <li
                className="nav-item mr-2 ml-2"
                data-target=" #carouselExampleIndicators"
                data-slide-to="2"
              >
                <div className="col">
                  <a className="nav-link " onclick="styleClick(event)" href="#">
                    ABOUT
                  </a>
                  <div className="underLine d-none"></div>
                </div>
              </li>
            </ol>
          </div>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active" id="car1">
                <div className="container mt-2 mb-2 ">
                  <h2></h2>
                  <div className="mb-5 row row-cols-2 row-cols-sm-2 row-cols-md-6 row-cols-lg-6">
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 1</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 2</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 3</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 4</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 5</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 6</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="mt-5"></h2>
                  <div className="mt-2 row row-cols-2 row-cols-sm-2 row-cols-md-6 row-cols-lg-6">
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 7</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 8</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 9</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 10</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body text-center">
                          <p className="card-text text-center">
                            <span>Song 11</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text text-center">
                            <span>Song 12</span>
                            <br />
                            <small style={{ color: "#616467;" }}>Queen</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" id="car1">
                <div className="container mt-2 mb-2 ">
                  <h2></h2>
                  <div className="mb-5 row row-cols-2 row-cols-sm-2 row-cols-md-6 row-cols-lg-6">
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="mt-5"></h2>
                  <div className="mt-2 row row-cols-2 row-cols-sm-2 row-cols-md-6 row-cols-lg-6">
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" id="car1">
                <div className="container mt-2 mb-2 ">
                  <h2></h2>
                  <div className="mb-5 row row-cols-2 row-cols-sm-2 row-cols-md-6 row-cols-lg-6">
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="mt-5"></h2>
                  <div className="mt-2 row row-cols-2 row-cols-sm-2 row-cols-md-6 row-cols-lg-6">
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>

                    <div className="col m2">
                      <div className="card">
                        <img src="http://via.placeholder.com/150" alt="..." />
                        <div className="card-body">
                          <p className="card-text">bla bla</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default home;

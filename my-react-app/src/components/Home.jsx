import React, { Component } from "react";

class album extends Component {
  state = {
    homeSongs: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=Bob%20Marley",
        {
          headers: {
            "x-rapidapi-key":
              "072ce4fe12mshfaac4b953a12006p1fbad8jsn60c87d42c08b",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      const songsArray = await response.json();
      if (response.ok) {
        alert("GOOD BOY");
        this.setState({ homeSongs: songsArray.data.slice(0, 6) });
        console.log(songsArray.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="col-10 offset-2" id="main">
        <div className="container-fluid mark mb-5">
          <ol className="list-group list-group-horizontal nav">
            <li
              className="nav-item mr-2 ml-2"
              data-target=" #carouselExampleIndicators"
              data-slide-to="0"
            >
              <div className="col">
                <a className="nav-link " onClick="styleClick(event)" href="#">
                  TRENDING
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
                <a className="nav-link " onClick="styleClick(event)" href="#">
                  PODCAST
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
                <a className="nav-link " onClick="styleClick(event)" href="#">
                  MOODS AND GENRES
                </a>
                <div className="underLine d-none"></div>
              </div>
            </li>
            <li
              className="nav-item  mr-2 ml-2"
              data-target=" #carouselExampleIndicators"
              data-slide-to="3"
            >
              <div className="col">
                <a className="nav-link " onClick="styleClick(event)" href="#">
                  NEW REALEASES
                </a>
                <div className="underLine d-none"></div>
              </div>
            </li>
            <li
              className="nav-item  mr-2 ml-2"
              data-target=" #carouselExampleIndicators"
              data-slide-to="4"
            >
              <div className="col">
                <a className="nav-link" onClick="styleClick(event)" href="#">
                  DISCOVER
                </a>
                <div className="underLine d-none"></div>
              </div>
            </li>
          </ol>
        </div>

        <div className="carousel-item active" id="car1">
          <div className="container mt-2 mb-2 ">
            <h2>#THROWBACKTHURSDAY</h2>
            <div className="mb-5 row row-cols-2 row-cols-sm-2 row-cols-md-6 row-cols-lg-6">
              {this.state.homeSongs.map((element) => (
                <div className="col m2">
                  <div className="card">
                    <img src="http://via.placeholder.com/150" alt="..." />
                    <div className="card-body text-center">
                      <p className="card-text">{element.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="mt-5">Classifiche</h2>
            <div className="mt-2 row row-cols-2 row-cols-sm-2 row-cols-md-6 row-cols-lg-6">
              <div className="col m2">
                <div className="card">
                  <img src="http://via.placeholder.com/150" alt="..." />
                  <div className="card-body text-center">
                    <p className="card-text">Top 50-Italy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default album;

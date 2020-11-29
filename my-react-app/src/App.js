import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import FooTer from "./components/FooTer";
import NavBar from "./components/NavBar";
import Album from "./components/Album";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/album" exact component={Album} />
        {/* <Route path="/artist" exact component={""} /> */}
        <FooTer />
      </div>
    </Router>
  );
}

export default App;


import React, { Component } from "react";
import Nav from "./react_components/navigation";
import Home from "./react_components/home";
import Footer from "./react_components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

class FitnessApp extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default FitnessApp;

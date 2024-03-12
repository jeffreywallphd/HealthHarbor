import React, { Component } from "react";
import "../css_files/home.css";
import Cards from "./cards";


class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <div className="div1">
            <h2 id="transform" style={{ margin: "0px" }}>
              TRANSFORM
            </h2>
            <h1 id="life" style={{ margin: "0px" }}>
              YOUR LIFE
            </h1>
            <p id="caring">
              Caring for your physical fitness is an investment in your present
              and future health and happiness. Prioritizing physical activity
              and adopting a healthy lifestyle can lead to a happier, more
              fulfilling life.
            </p>
            <h5 id="readmore"> READ MORE </h5>
          </div>
          <div className="div2">
            <img src={"../images/body_builder.png"} alt="error" />
          </div>
        </div>
        <Cards />
      </div>
    );
  }
}

export default Home;

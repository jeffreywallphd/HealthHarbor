import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css_files/cards.css";

interface CardProps {
  image: string;
  title: string;
  data: string;
  key: number;
}

const cardsArray: CardProps[] = [
  {
    key: 0,
    image: "../images/getting_started.png",
    data: "Here's a step-by-step guide to help you begin your journey",
    title: "GETTING STARTED",
  },
  {
    key: 1,
    image: "../images/begginer_programs.png",
    data: "Ready to embark on your fitness journey? Find a program that inspires and motivates you",
    title: "BEGINNER PROGRAMS",
  },
  {
    key: 2,
    image: "../images/mass_gaining_program.png",
    data: "Increase muscle mass and overall body size through targeted exercise, nutrition, and lifestyle strategies",
    title: "MASS GAIN PROGRAMS",
  },
];

class Card extends Component<CardProps> {
  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
  };

  render() {
    const { image, title, data, key } = this.props;
    return (
      <div key={key} className="cardsproto">
        <div className="cardsdiv">
          <figure>
            <img src={image} alt="error" className="image" />
          </figure>
        </div>
        <div>
          <h4>{title}</h4>
          <p>{data}</p>
        </div>
      </div>
    );
  }
}

class Cards extends Component {
  render() {
    return <div className="cards">{cardsArray.map((card) => <Card {...card} />)}</div>;
  }
}

export default Cards;

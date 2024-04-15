import React, { Component } from 'react';
import { HashRouter, NavLink, Routes, Route, Link } from "react-router-dom";
import './habittracker.css';

import AddHabit from "./AddHabit";

interface ArrowIconProps {
    direction: 'left' | 'right';
}

class ArrowIcon extends Component<ArrowIconProps> {
    render() {
        const { direction } = this.props;
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className={`arrow-icon ${direction}`}>
                <path fill="currentColor" d="M6.993 7.007L12 12.014l5.007-5.007 1.414 1.414L12 14.842 5.579 8.42l1.414-1.413z" />
            </svg>
        );
    }
}

class HabitTracker extends Component<{}, {
    showSidebar: boolean;
    showViewOptions: boolean;
    motivationalQuote: string }>
{
    constructor(props: {}) {
        super(props);
        this.state = {
            showSidebar: true,
            showViewOptions: false,
            motivationalQuote: ''
        };
    }

    toggleSidebar = () => {
        this.setState((prevState) => ({showSidebar: !prevState.showSidebar}));
    };

    componentDidMount() {
        const motivationalQuotes = [
            "Success is the sum of small efforts, repeated day in and day out.",
            "The secret of your future is hidden in your daily routine.",
            "The only way to make a habit stick is to turn it into a routine.",
            "Every accomplishment starts with the decision to try.",
            "You will never change your life until you change something you do daily. The secret of your success is found in your daily routine.",
            "Make each day your masterpiece.",
            "The first step towards getting somewhere is to decide that you are not going to stay where you are.",
            "Success is not the result of spontaneous combustion. You must set yourself on fire.",
            "Your habits determine your future. Choose them wisely.",
            "Small daily improvements are the key to staggering long-term results.",
            "Don't watch the clock; do what it does. Keep going.",
            "Believe you can and you're halfway there.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "You are never too old to set another goal or to dream a new dream."
        ];
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        this.setState({motivationalQuote: motivationalQuotes[randomIndex]});
    }

    render() {
        const {showSidebar, showViewOptions, motivationalQuote} = this.state;
        return (
            <div className="habit-tracker-container">
                <div className={`arrow-container ${showSidebar ? 'arrow-left' : 'arrow-right'}`}>
                    <button className="arrow-button" onClick={this.toggleSidebar}>
                        <ArrowIcon direction={showSidebar ? 'left' : 'right'}/>
                    </button>
                </div>
                {showSidebar && (
                    <div className="sidebar">
                        <ul>
                            <li>
                                <Link to="/AddHabit"><button className="habit-button">Habit</button></Link>
                            </li>
                            <li>
                                <button className="option-button"
                                        onClick={() => this.setState((prevState) => ({showViewOptions: !prevState.showViewOptions}))}>
                                    View Options
                                </button>
                                {showViewOptions && (
                                    <ul>
                                        <li>
                                           <Link to=""><button className="daily-button">Daily</button></Link>
                                        </li>
                                        <li>
                                           <Link to="/Weekly"><button className="weekly-button">Weekly</button></Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                               <Link to=""><button className="due-button">Due</button></Link>
                            </li>
                            <li>
                               <Link to=""><button className="report-button">Habit Reports</button></Link>
                            </li>
                        </ul>
                    </div>
                )}
                <div className="main-content">
                    <h1>{motivationalQuote}</h1>
                </div>
            </div>
        );
    }

}

export default HabitTracker;

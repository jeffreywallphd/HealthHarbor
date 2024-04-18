import React, { Component } from 'react';
import { HashRouter, NavLink, Routes, Route, Link } from "react-router-dom";
import './habittracker.css';

import AddHabit from "./AddHabit";
import WeeklyView from "./Weekly";
import DailyView from "./DailyView";
import SideNavBar from "./SideNavBar";


class HabitTracker extends Component<{}, {
    motivationalQuote: string }>
{
    constructor(props: {}) {
        super(props);
        this.state = {
            motivationalQuote: ''
        };
    }

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
        const {motivationalQuote} = this.state;
        return (
            <div className="habit-tracker-container">
                <SideNavBar></SideNavBar>
                <div className="main-content">
                    <h1>{motivationalQuote}</h1>
                </div>
            </div>
        );
    }

}

export default HabitTracker;

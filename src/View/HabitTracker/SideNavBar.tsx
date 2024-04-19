import React, { Component } from 'react';
import { HashRouter, NavLink, Routes, Route, Link } from "react-router-dom";
import './habittracker.css';

import AddHabit from "./AddHabit";
import WeeklyView from "./Weekly";
import DailyView from "./DailyView";

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

class SideNavBar extends Component<{}, {
    showSidebar: boolean;
    showViewOptions: boolean; }>
{
    constructor(props: {}) {
        super(props);
        this.state = {
            showSidebar: true,
            showViewOptions: false,
        };
    }

    toggleSidebar = () => {
        this.setState((prevState) => ({showSidebar: !prevState.showSidebar}));
    };

    render() {
        const {showSidebar, showViewOptions} = this.state;
        return (
            <div className={'nav-container'}>
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
                                            <Link to="/DailyView"><button className="daily-button">Daily</button></Link>
                                        </li>
                                        <li>
                                            <Link to="/WeeklyView"><button className="weekly-button">Weekly</button></Link>
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
                <div className={`arrow-container ${showSidebar ? 'arrow-left' : 'arrow-right'}`}>
                    <button className="arrow-button" onClick={this.toggleSidebar}>
                        <ArrowIcon direction={showSidebar ? 'left' : 'right'}/>
                    </button>
                </div>
            </div>
        );
    }

}

export default SideNavBar;
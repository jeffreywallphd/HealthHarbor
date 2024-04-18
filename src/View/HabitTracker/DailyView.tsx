import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SideNavBar from './SideNavBar';

function DailyView() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={'habit-tracker-container'}>
            <SideNavBar></SideNavBar>
            <div className={'daily-content'}>
            <div className={'button-row'}>
                <h2>Habits</h2>
                <Button id='add-new' variant="primary" onClick={handleShow}>
                    Add New Habit
                </Button>
            </div>
            <div>
                <p>No habits yet. Add some!</p>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Habit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>Habit </label><input type="text"></input><br></br>
                        <label>Due By </label><input type="text"></input><br></br>
                        <label>Priority</label><br></br>
                        <input type="radio" value="low"></input><label>Low</label><br></br>
                        <input type="radio" value="med"></input><label>Medium</label><br></br>
                        <input type="radio" value="high"></input><label>High</label><br></br>
                        <input type="submit" onClick={handleClose}></input>
                    </form>
                </Modal.Body>
            </Modal>
            </div>
        </div>
    );
}

export default DailyView;
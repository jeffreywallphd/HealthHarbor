import React, { useState, useEffect } from 'react';

function AddHabit() {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedHabitName, setEditedHabitName] = useState('');
    const [optionsIndex, setOptionsIndex] = useState(null);

    useEffect(() => {
        const storedHabits = JSON.parse(localStorage.getItem('habits'));
        if (storedHabits) {
            setHabits(storedHabits);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits));
    }, [habits]);

    const handleAddHabit = () => {
        if (newHabit.trim() !== '') {
            setHabits([...habits, { name: newHabit, completed: false, priority: false }]);
            setNewHabit('');
        }
    };

    const toggleCompletion = (index) => {
        const updatedHabits = [...habits];
        updatedHabits[index].completed = !updatedHabits[index].completed;
        setHabits(updatedHabits);
    };

    const handleDeleteHabit = (index) => {
        const updatedHabits = [...habits];
        updatedHabits.splice(index, 1);
        setHabits(updatedHabits);
    };

    const handleEditHabit = (index) => {
        if (editedHabitName.trim() !== '') {
            const updatedHabits = [...habits];
            updatedHabits[index].name = editedHabitName;
            setHabits(updatedHabits);
        }
        setEditingIndex(null);
        setEditedHabitName('');
    };

    const toggleOptions = (index) => {
        if (optionsIndex === index) {
            setOptionsIndex(null);
        } else {
            setOptionsIndex(index);
        }
    };

    const togglePriority = (index) => {
        const updatedHabits = [...habits];
        updatedHabits[index].priority = !updatedHabits[index].priority;
        setHabits(updatedHabits);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                <input
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        marginRight: '10px',
                    }}
                    type="text"
                    value={newHabit}
                    onChange={(e) => setNewHabit(e.target.value)}
                    placeholder="Enter a new habit"
                />
                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={handleAddHabit}
                >
                    Add Habit
                </button>
            </div>
            <div style={{ width: '300px' }}>
                {habits.map((habit, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '10px',
                            padding: '10px',
                            borderRadius: '5px', // Removed background color and box shadow
                        }}
                    >
                        <div style={{ flex: '1' }}>
              <span style={{
                  textDecoration: habit.completed ? 'line-through' : 'none',
                  color: habit.priority ? 'blue' : 'inherit' // Apply blue color to priority habit name
              }}>
                {editingIndex === index ? (
                    <input
                        style={{
                            border: 'none',
                            fontSize: 'inherit',
                            background: 'none',
                            width: '100%',
                            outline: 'none' // Remove outline
                        }}
                        type="text"
                        value={editedHabitName}
                        onChange={(e) => setEditedHabitName(e.target.value)}
                        onBlur={() => handleEditHabit(index)}
                        autoFocus
                    />
                ) : (
                    <span>{habit.name}</span>
                )}
              </span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                checked={habit.completed}
                                onChange={() => toggleCompletion(index)}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <button
                                style={{
                                    marginBottom: '5px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#007bff',
                                }}
                                onClick={() => setEditingIndex(index)}
                            >
                                Edit
                            </button>
                            <button
                                style={{
                                    marginBottom: '5px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'red',
                                }}
                                onClick={() => handleDeleteHabit(index)}
                            >
                                Delete
                            </button>
                            <button
                                style={{
                                    marginBottom: '5px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: habit.priority ? 'blue' : 'inherit',
                                }}
                                onClick={() => togglePriority(index)}
                            >
                                Priority
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddHabit;
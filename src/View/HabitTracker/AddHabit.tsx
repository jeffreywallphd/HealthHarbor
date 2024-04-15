import React, { useState, useEffect } from 'react';

interface Habit {
    name: string;
    completed: boolean;
    priority: boolean;
}

function AddHabit() {
    const [habits, setHabits] = useState<Habit[]>([]);
    const [newHabit, setNewHabit] = useState('');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editedHabitName, setEditedHabitName] = useState('');
    const [optionsIndex, setOptionsIndex] = useState<number | null>(null);

    useEffect(() => {
        const storedHabits = JSON.parse(localStorage.getItem('habits') || '[]');
        setHabits(storedHabits);
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

    const toggleCompletion = (index: number) => {
        const updatedHabits = [...habits];
        updatedHabits[index].completed = !updatedHabits[index].completed;
        setHabits(updatedHabits);
    };

    const handleDeleteHabit = (index: number) => {
        const updatedHabits = [...habits];
        updatedHabits.splice(index, 1);
        setHabits(updatedHabits);
    };

    const handleEditHabit = (index: number) => {
       
        setEditedHabitName(habits[index].name);
       
        setEditingIndex(index);
    };

    const handleSaveEdit = () => {
        if (editedHabitName.trim() !== '') {
            const updatedHabits = [...habits];
            updatedHabits[editingIndex!].name = editedHabitName; 
            setHabits(updatedHabits);
            setEditingIndex(null);
            setEditedHabitName('');
        }
    };

    const toggleOptions = (index: number) => {
        setOptionsIndex(index === optionsIndex ? null : index);
    };

    const togglePriority = (index: number) => {
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
                    <div key={index} style={{ position: 'relative' }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '10px',
                                padding: '10px',
                                borderRadius: '5px',
                            }}
                        >
                            <div style={{ flex: '1' }}>
                                {editingIndex === index ? (
                                    <input
                                        style={{
                                            border: 'none',
                                            fontSize: 'inherit',
                                            background: 'none',
                                            width: '100%',
                                            outline: 'none',
                                        }}
                                        type="text"
                                        value={editedHabitName}
                                        onChange={(e) => setEditedHabitName(e.target.value)}
                                        autoFocus
                                    />
                                ) : (
                                    <span style={{
                                        textDecoration: habit.completed ? 'line-through' : 'none',
                                        color: habit.priority ? 'blue' : 'inherit',
                                    }}>
                                        {habit.name}
                                    </span>
                                )}
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={habit.completed}
                                    onChange={() => toggleCompletion(index)}
                                />
                            </div>
                            <div>
                                <button
                                    onClick={() => toggleOptions(index)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: '0',
                                    }}
                                >
                                    <span style={{ fontSize: '24px', cursor: 'pointer' }}>...</span>
                                </button>
                            </div>
                        </div>
                        {optionsIndex === index && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '100%',
                                    marginLeft: '10px',
                                    width: 'fit-content',
                                }}
                            >
                                <button style={{ display: 'block', marginBottom: '5px' }} onClick={() => handleEditHabit(index)}>Edit</button>
                                <button style={{ display: 'block', marginBottom: '5px' }} onClick={() => handleDeleteHabit(index)}>Delete</button>
                                <button style={{ display: 'block' }} onClick={() => togglePriority(index)}>
                                    {habit.priority ? 'Unmark Priority' : 'Mark Priority'}
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddHabit;

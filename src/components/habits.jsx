import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            // Firstly, assign Id
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ],
    };

    render() {
        return (
        <ul>
            {this.state.habits.map(habit => (
                <Habit key = {habit.id} habit = {habit}></Habit> // habit -> props key, {habit} -> map's parameter
            ))}
        </ul>
        );
    }
}

export default Habits;
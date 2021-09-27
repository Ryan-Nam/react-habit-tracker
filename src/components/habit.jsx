import React, { Component } from 'react';
// No State: App 과 연결된 것은 Habits 이기 때문에, 여기에서 State 를 가지고 있을 필요는 없다.
// 이 Habit 이라는 컴포넌트는, App.jsx 과 연결된 Habits.jsx에서, 보여지는 도구의 역할로만 쓰이는 sub 인 컴포넌트. 
class Habit extends Component {
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handledDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };


    render() {
        // Object Destructing 이용
        // const habitName = this.props.habit.name;
        // const habitCount = this.props.habit.count;
        const {name, count} = this.props.habit; 
        //이제 대신 html 에서는 {habitName} 이 아니라 , name, count 를 써야지  
        
        return (
            <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handledDecrement}>
            <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
            </li>
        );
    }
}

export default Habit;
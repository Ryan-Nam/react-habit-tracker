import React, { Component } from 'react';

class Habit extends Component {


    handleIncrement = () => {
        //this.setState({ count: this.state.count + 1});
    };

    handledDecrement = () => {
        //const count = this.state.count -1;
        //this.setState({count: count < 0 ? 0 : count});
    };

    handledDelete = () => {

    }


    render() {
        //console.log(this.props.habit);
        //const habitName = this.props.habit.name; // rather than this, we use other trick
        const {name, count} = this.props.habit; //즉, 자동으로 여기 안의 데이터가 name 과 count 데이터들이 여기로 옵니다.
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
            <button className="habit-button habit-delete" onClick={this.handledDelete}>
                <i className="fas fa-trash"></i>
            </button>
            </li>
        );
    }
}

export default Habit;
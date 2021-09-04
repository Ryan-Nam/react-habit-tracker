import React, { Component } from 'react';

class Habit extends Component {
    state ={
        count: 0,
    };

    /*
    handleIncrement = (event) => {
        console.log(event);
    }
    */
    handleIncrement = () => {
        // State 오브젝트 안에있는 count를 증가한 뒤, State를 업데이트 해주어야함
        // State 를 업데이트하는 React의 함수는 setSate 임
        this.setState({ count: this.state.count + 1});
        //count 라는 이름의 변수에는 this.state에있는 count 의 숫자를 증가
    };

    handledecrement = () => {
        //검사, const 라는 count 의 변수에, count 를 -1 시키는 코드를 작성하고
        // this.setState 에서 조건을 설정
        // 조건: count가 만약에 0보다 작으면? 0을 출력, 아니면 새로운 카운트를 출력해.
        const count = this.state.count -1;
        
        this.setState({count: count < 0 ? 0 : count});
    };


    render() {
        console.log(this.props.habit);
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
            <button className="habit-button habit-decrease" onClick={this.handledecrement}>
            <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete">
                <i className="fas fa-trash"></i>
            </button>
            </li>
        );
    }
}

export default Habit;
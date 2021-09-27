import React, { Component } from 'react'
import Habit from './habit'

class Habits extends Component {
  state = {
    habits: [
      // Firstly, assign Id
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  }
  //'handleIncreament' 는 변수
  // 이 변수는 함수를 가리키고 있음 -> 즉, onIncrement={this.handleIncremnet} 하게되면, 함수를 바로 호출하는게 아니라, 포인팅만 하는것임
  handleIncrement = habit => {
    const habits = [...this.state.habits]; // Spread Operator
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits }); // key: value == 새로운 배열을 만들어주어야함 == key value가 동일한 경우 한새로 생략 가능 habits
  }

  handledDecrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count -1;
    habit[index].count = count < 0 ? 0 : count;
    this.setState({habits:habits});
  }

  handledDelete = habit => {
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits:habits});   
  }

  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={(event) => this.handledDecrement(event)} // this is long way, the other two are short way to declare arrow function
            onDelete={this.handledDelete}
          ></Habit> // habit -> props key, {habit} -> map's parameter
        ))}
      </ul>
    )
  }
}

export default Habits;

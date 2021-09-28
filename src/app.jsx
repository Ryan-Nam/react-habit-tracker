import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

//'handleIncreament' 는 변수
  // 이 변수는 함수를 가리키고 있음 -> 즉, onIncrement={this.handleIncremnet} 하게되면, 함수를 바로 호출하는게 아니라, 포인팅만 하는것임
  handleIncrement = habit => {
    // const habits = [...this.state.habits]; // Spread Operator
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });

    this.setState({ habits }); // key: value == 새로운 배열을 만들어주어야함 == key value가 동일한 경우 한새로 생략 가능 habits
  };

  handleDecrement = habit => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;


    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });

    this.setState({ habits:habits });
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits:habits });
  };

  handleAdd = name => {
    // Spread Operator
    // make a new habits    Date.now API(add time etc and make unique id)
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    // make a new array
    // use map, 빙글빙글돌며 make new data
    // const habits = this.state.habits.map(habit => {
    //   habit.count = 0;
    //   return habit;
    // });

    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });

    
    this.setState({ habits });
  };


  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
           // onDecrement={(event) => this.handledDecrement(event)} //
          // this is long way, the other two are short way to declare arrow function
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
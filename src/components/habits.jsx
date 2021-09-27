import React, { Component } from 'react'
import Habit from './habit'
import HabitAddForm from './habitAddForm';

class Habits extends Component {

  //'handleIncreament' 는 변수
  // 이 변수는 함수를 가리키고 있음 -> 즉, onIncrement={this.handleIncremnet} 하게되면, 함수를 바로 호출하는게 아니라, 포인팅만 하는것임
//   handleIncrement = habit => {
//     this.props.onIncrement(habit);
//   }

//   handledDecrement = habit => {
//     this.props.onDecrement(habit);
//   }

//   handledDelete = habit => {
//     this.props.onDelete(habit);
//   }

render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
              // **** onDelete={(habit) => {this.props.handleDelete(habit)}} // then No need to write props like above
               // habit -> props key, {habit} -> map's parameter
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
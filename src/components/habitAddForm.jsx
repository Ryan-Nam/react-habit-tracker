import React, { Component } from 'react';

class HabitAddForm extends Component {
  formRef = React.createRef(); // .createRef = DOM에 접근하는 것
  inputRef = React.createRef(); // ex) same with the document.querySelector('');

  //onSubmit : member variable
  onSubmit = event => {
    event.preventDefault(); // click 'submit' -> reload => so cancel the default browser reload function.
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset(); // or this.inputRef.current.value = ''; 
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;

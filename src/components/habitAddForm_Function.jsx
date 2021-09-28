import React, { memo } from 'react';
// 바로 컴포넌트를 리턴하는게 아니라, 원하는것을 받고 처리헤야하기때문에 {} 을 사용
const HabitAddForm_Function = memo(props => {

    const formRef = React.createRef(); 
    const inputRef = React.createRef(); 

    const onSubmit = event => {
    event.preventDefault(); 
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset(); 
    };


    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="add-input"
            placeholder="Habit"
          />
          <button className="add-button">Add</button>
        </form>
      );
  });

export default HabitAddForm_Function;


//함수이기때문에, 함수 안에서는 this 안해도 되고, 바로 변수에 접근 가능 => this를 안써서 코드가 깔끔해지니 사람들이 선호하는 것임

// 그냥 함수이기때문에 이게 계속 re-rendering 이 됌 -> 

// Class 에 PurComponent 가 있으면 함수에는 Memo가 있음
//Memo 라는 함수 안에 function Component 를 전달해주는 것: PureComponent 처럼, Porps 가 변경이 되지 않으면 안에있는 함수가 호출이 되지 않음

// State가 따로 없으면 함수형 컴포넌트를 만들 수 있음
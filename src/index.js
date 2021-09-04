import React from 'react';
import ReactDOM from 'react-dom';
/*  1. react-dom 이라는 Library 에서 ReactDOM 이라는 Class 를 Import
    2. ReactDOM 이라는 Class 안에있는 함수(render) 를 이용해서 
    3. document(page)에 있는 ID 가 "root" 라는 요소를 가지고 와서 (from index.html)
    4. 그 요소에 root component 를 연결시켜줌
    => root 라는 ID를 가진 요소에 제일 상위에 있는 "App" 이라는 Component 에 연결 -> App 은 Hello 에 연결되어있으니, 화면에 Hello.
 */
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';


ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

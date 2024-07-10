import './App.css';
import NowDate from './NowDate.jsx';
import Admintask from './Admintask.jsx';
import { useState } from 'react';
import todolist from './data.js';
import Done from './Done.jsx';
import Task from './Task.jsx';

function App() {
  let [todo, setTodo] = useState(todolist);
  return (
    <div className="container">
      <div className="content">
        <div className="title">
          <h1>UMC Study Plan</h1>
        </div>
        <Admintask todo={todo} setTodo={setTodo} />
        <h3>
          <NowDate />
        </h3>
        <div className="todolist">
          <div className="todo">
            <h4>해야할 일</h4>
            {todo.map(function (a, i) {
              if (!a.isDone) {
                return <Task a={a} todo={todo} setTodo={setTodo} i={i} />;
              }
            })}
          </div>
          <div className="done">
            <h4>해낸 일</h4>
            {todo.map(function (a, i) {
              if (a.isDone) {
                return <Done a={a} todo={todo} setTodo={setTodo} i={i} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

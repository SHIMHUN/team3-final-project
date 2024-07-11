import { useState } from 'react';

function Admintask({ todo, setTodo }) {
  let [newTask, setNewTask] = useState('');

  return (
    <div className="input-box">
      <input
        placeholder="오늘의 할 일을 작성해주세요!"
        id="newtask"
        onChange={e => {
          setNewTask(e.target.value);
        }}
        onKeyUp={e => {
          if (window.event.keyCode == 13) {
            if (newTask) {
              e.preventDefault();
              document.getElementById('newtaskbtn').click();
              setNewTask('');
            }
          }
        }}
      />
      <div>
        <button
          id="newtaskbtn"
          onClick={() => {
            if (newTask) {
              let newTodo = [...todo];
              newTodo.push({
                id: newTodo.length,
                content: newTask,
                isDone: false,
              });
              setTodo(newTodo);
              document.getElementById('newtask').value = null;
            }
          }}
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default Admintask;

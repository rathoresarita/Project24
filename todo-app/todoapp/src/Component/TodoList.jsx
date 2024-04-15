// TodoList.js
import React from 'react';
import '../css/list.css';

const TodoList = ({ tasks, onDelete ,onComplete}) => {
  console.log('taskkkksss', tasks);

  return (
    <div className='list'>
      {tasks.map((task, index) => (

        <div className='todoList' key={index}>
          <div className='listName'>
          {/* Conditionally apply strike-through style if task is completed */}
          <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</p>
 
          </div>
          <div className='listName'>
          <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.des}</p>
          </div>
          <div className='listButtons'>
            <button className='button1 ' onClick={()=>onComplete(index)} >Complete</button>
            <button className='button2' onClick={() => onDelete(index)}>Delete</button>
          </div>
        </div>

      ))}
    </div>
  );
};

export default TodoList;

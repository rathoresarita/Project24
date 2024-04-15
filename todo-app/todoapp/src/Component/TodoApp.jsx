import React, { useState } from 'react'

import '../css/app.css'
import TodoList from './TodoList'
const TodoApp = () => {
    const [name, setName] = useState(null)
    const [des, setDes] = useState(null)
    const [tasks, setTasks] = useState('')

    const [counter, setCounter] = useState(0);
    const [showLists, setShowLists] = useState(false);

    const handleInputName = (e) => {
        setName(e.target.value)


    }

    const handleInputDes = (e) => {

        setDes(e.target.value)


    }
    const handleDelete = (index) => {

        const newTask = [...tasks]
        newTask.splice(index, 1)
        setTasks(newTask)
    }
    const handleAdd = () => {
        if (name.trim() !== '' && des.trim() !== '') {
            const newTask = { name, des };
            setTasks(prevTasks => [...prevTasks, newTask]); // Updating tasks using previous state
            setName('');
            setDes('');
            setShowLists(true); // Update showList here to true after adding a task
        }
    };
    console.log('tssks', tasks)
    const handleComplete = (index) => {
       const newTask=[...tasks]
       newTask[index].completed=true
       setTasks(newTask)
    };
    



    return (
        <div>
            <div className='app-wrapper'>
                <div className='app'>

                    <div className="input-container">
                        <label htmlFor="name">Name</label>
                        <input id='name' className='input-name' type="text"
                            value={name}
                            onChange={handleInputName}
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="des">Description</label>
                        <input id='des' type="text" onChange={handleInputDes}
                            value={des}
                        />
                    </div>

                    <button id='add' onClick={handleAdd} >Add</button>


                </div>
            </div>
            {showLists && <TodoList tasks={tasks} onDelete={handleDelete} onComplete={handleComplete} ></TodoList>



            }
        </div>

    )
}

export default TodoApp
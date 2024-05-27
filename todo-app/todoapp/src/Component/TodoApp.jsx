import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, completeTodo } from '../Reducer/reduxToolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import '../css/app.css'
import TodoList from './TodoList'
const TodoApp = () => {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    // const [tasks, setTasks] = useState('')

    // const [counter, setCounter] = useState(0);
    const [showLists, setShowLists] = useState(false);


    const tasks = useSelector(state => state.todos.tasks);


    console.log('task', tasks)

    const dispatch = useDispatch();

    const handleInputName = (e) => {
        setName(e.target.value)


    }

    const handleInputDes = (e) => {

        setDes(e.target.value)


    }
    const handleDelete = (index) => {

        // const newTask = [...tasks]
        // newTask.splice(index, 1)
        // setTasks(newTask)
        dispatch(deleteTodo(index))

    }
    const handleAdd = () => {

        if (!name || !des) {
            toast.error('Please Enter both field')
            return;
        }

        if (name.trim() !== '' && des.trim() !== '') {
            // const newTask = { name, des };
            // setTasks(prevTasks => [...prevTasks, newTask]); // Updating tasks using previous state

            dispatch(addTodo({ name, des }));
            setName('');
            setDes('');
            setShowLists(true); // Update showList here to true after adding a task
        }
    };
    console.log('tssks', tasks)
    const handleComplete = (index) => {
        //    const newTask=[...tasks]
        //    newTask[index].completed=true
        //    setTasks(newTask)


        dispatch(completeTodo(index))
    };




    return (
        <div>

            <div className='app-wrapper'>
                <ToastContainer />
                <div className='app'>
                    <div className="input-container">
                        <label htmlFor="name">Name</label>
                        <input id='name' className='input-name' type="text" value={name} onChange={handleInputName} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="des">Description</label>
                        <input id='des' type="text" value={des} onChange={handleInputDes} />
                    </div>
                    <button id='add' onClick={handleAdd}>Add</button>
                </div>
            </div>
            {showLists && <TodoList tasks={tasks} onDelete={handleDelete} onComplete={handleComplete} />}
        </div>
    );
}

export default TodoApp


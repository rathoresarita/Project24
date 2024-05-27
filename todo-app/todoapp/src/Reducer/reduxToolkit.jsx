// import { createSlice } from "@reduxjs/toolkit";


// export const todoSlice = createSlice({

//     name: 'todos',

//     initialState: {
//         tasks: []
//     },
//     reducers: {

//         addToDo: (state, action) => { state.tasks.push({ ...action.payload, completed: false }) },
//         deleteTodo: (state, action) => {
//             const index = state.tasks.findIndex(todo => todo.id === action.payload.id);
//             if (index !== -1) {
//                 state.tasks.splice(index, 1);
//             }
//         },
//         completeTodo: (state, action) => {
//             const index = state.tasks.findIndex(todo => todo.id === action.payload.id);
//             if (index !== -1) {
//                 state.tasks[index].completed = true;
//             }

//         }


//     }
// })
// export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
// // Correct logging of addTodo function
// console.log('addTodo function:', todoSlice.actions.addTodo);

// console.log('add', addTodo)

// // Correct logging of addTodo function
// console.log('addTodo function:', todoSlice.actions.addTodo);


// export const todoReducer = todoSlice.reducer; // Extract the reducer function

// export default todoReducer; // Export the reducer function as default

// reduxToolkit.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        tasks: []
    },
    reducers: {
        addTodo: (state, action) => {

            state.tasks = [...state.tasks, { ...action.payload, completed: false }];
        },



        deleteTodo: (state, action) => {
            // Use filter to create a new array excluding the todo item with the specified ID
            state.tasks = state.tasks.filter((task, index) => index !== action.payload);
        },

        completeTodo: (state, action) => {
            state.tasks = state.tasks.map((task, index) =>
                index === action.payload ? { ...task, completed: true } : task
            );
        },



    },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer; // Extract the reducer function

export default todoReducer; // Export the reducer function as default


// import { createStore } from 'redux';

// import todoReducer from '../Reducer/reducer'
// const store = createStore(todoReducer);

// export default store;


import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './reduxToolkit'

const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export default store;

// store.js

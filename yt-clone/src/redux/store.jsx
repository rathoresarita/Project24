import { createStore, applyMiddleware } from 'redux';
import  {thunk}  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const intialState={
    name:"Sumit",
    age:"21"
}

const reducer=(intialState)=>intialState

const store=createStore(reducer,intialState,composeWithDevTools(applyMiddleware(thunk)))

export default store;
import React,{useReducer} from 'react'
const  ACTION={INCREASE:"increase",DECREASE:"decrease"}

const intialState={count:0}

//redcuer function
const reducer=(state,action)=>{
    // return {count:state.count+1}itch()

    switch(action.type){
        case ACTION.INCREASE:
            return {
               count:state.count+1 
            };
            case ACTION.DECREASE:
                return { count :state.count-1}
                default:
                    return state;
    }

}


const UseReducer = () => {
//state=intial state and dispatch is function which update the state 
//reducer is function which manage all the state and  intials state is by default state  
    const[state,dispatch] =useReducer(reducer,intialState)

    const increaseCount=()=>{
        //to call the reducer fucntion  i am using dispathc fucntion
        dispatch({type:ACTION.INCREASE})
    }

    const decreaseCount=()=>{
        dispatch({type:ACTION.DECREASE})

    }
  return (
    <div>
   <h2>Countsss :{state.count}</h2>
<button onClick={increaseCount}>INCREASE</button>
<button onClick={decreaseCount}>DECREASE</button>
</div>
  )
}
export default UseReducer
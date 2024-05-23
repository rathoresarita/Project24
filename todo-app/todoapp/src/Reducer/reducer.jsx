import { ADD_TO_DO, DELETE_TO_DO, CompleteToDo, COMPLETE_TO_DO } from './action'

const intialState = {
    tasks: []
}

const todoReducer = (state = intialState, action) => {

    switch (action.type) {
        case ADD_TO_DO:
            return {
                ...state,
                tasks: [...state.tasks, { ...action.payload, completed: false }]
            };

        case DELETE_TO_DO:

            console.log('state', state.tasks)
            const updatedTasks = state.tasks.filter((task, index) =>



            (
                console.log('delete', task),
                console.log('index', index),
                console.log('action', action.payload),
                index !== action.payload)


            )

                ;

            console.log('updted', updatedTasks)

            return {
                ...state,
                tasks: updatedTasks
            };


        case COMPLETE_TO_DO:
          const  updatetask=state.tasks.map((task,index)=>(
                index === action.payload ? { ...task, completed: true } : task
            ))

        return {
            ...state,
            tasks:updatetask
        }
        


        //            case DELETE_TO_DO: 
        //             return{
        // ...state,
        // tasks:

        // }

        default:
            return state;
    }

}
export default todoReducer
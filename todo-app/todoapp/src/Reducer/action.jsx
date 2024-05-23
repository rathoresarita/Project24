import { type } from "@testing-library/user-event/dist/type"

export const ADD_TO_DO='ADD_TO_DO'
export const DELETE_TO_DO= 'DELETE_TO_DO'
export const  COMPLETE_TO_DO='COMPLETE_TO_DO'


export const addtoDo=({name,des})=>({
type: ADD_TO_DO,
payload:{name,des}


})

// export const CompleteToDo=()=>(
//     {
// type:COMPLETE_TO_DO,
// payload:index

//     }
// )

 export const  deleteToDo=(index)=>({
type:DELETE_TO_DO,
payload:index
})


export const completeToDo=(index)=>(


    {
        type:COMPLETE_TO_DO,
        payload:index
    }
)
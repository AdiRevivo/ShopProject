
import produce from "immer";
import createReducer from './ReducerUntil'
const initialState={
    Products:[
        {
            id:"1",
            prodName:"milk",
            amount:'30',
            price:"5"
        },
        {
            id:"2",
            prodName:"Beard",
            amount:"17",
            price:"6"
            
        },
        {
            id:'3',
            prodName:"Coffee",
            amount:"49",
            price:"12"
            
        },
    ]
}
const products={
    setProdName(state,action)
    {
        state.Products.prodName=action.payload
    },  
    
    
    //     setAmountt(state,action)
    //     {
    //         const index = state.Products.findIndex(p => p.id !== action.payload)
    //         const newArray = [...state.Products];
    //         newArray[index].amount=action.payload
    
    //     }
}

// // case COMPLETE_TODO: {
// //     const index = state.todos.findIndex(todo => todo.id !== action.payload); //finding index of the item
//     const newArray = [...state.todos]; //making a new array
//     newArray[index].completed = true//changing value in the new array
//     return { 
//         ...state, //copying the orignal state
//         todos: newArray, //reassingning todos to new array
//     }
// }
export default produce((state,action)=>createReducer(state,action,products),initialState)



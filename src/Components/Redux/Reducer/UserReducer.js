
import produce from "immer";
import createReducer from './ReducerUntil'
const initialState={
    users:
    [ 
        {
            userId:100,
            UserName:"Adi",
            passWord:"1234"
        },
        {  userId:101,
            UserName:"Michal",
            passWord:"1234"
        },
        {  userId:102,
            UserName:"Yael",
            passWord:"1234"
        },
    ]
}


const user={
    setNameUser(state,action)
    {
        state.users.UserName=action.payload
    },
    setLastNameUser(state,action)
    {
        state.users.passWord=action.payload
    },
}
export default produce((state,action)=>createReducer(state,action,user),initialState)



import produce from "immer";
import createReducer from './ReducerUntil'
const initialState={
    buy:[
        {
            UserId:'4',
            Id:'0',
            ProdName:"flower",
            Amount:'4',
            Price:'22',
        },
        // {
        //     userId:Number,
        //     prodName:String,
        //     amount:Number,
        //     price:Number
        // }
    ]
    
    
    
};
const Buy={
    addCart(state,action)
    { 
        state.buy.push(action.payload)
    },
    removeProd(state,action)
    { 
        
        state.buy=  state.buy.filter(x => x.Id !== action.payload.Id)  
    },
    // setAmount(state,action)
    // {
    
    //     const index = state.buy.findIndex(p => p.Id !== action.payload.Id)
    //     const newArray = [...state.buy];
    //     newArray[index].Amount=action.payload
    
    // }
    
    plus(state,action)
    { 
        const index = state.buy.findIndex(p => p.Id == action.payload.Id)
        state.buy[index].Amount++
        
        // const newArray = [...state.buy];
        // newArray[index].Amount=-1
    },
    minus(state,action)
    { 
        const index = state.buy.findIndex(p => p.Id == action.payload.Id)
        state.buy[index].Amount--
        // const newArray = [...state.buy];
        // newArray[index].Amount=+1  
    },
}
export default produce((state,action)=>createReducer(state,action,Buy),initialState)
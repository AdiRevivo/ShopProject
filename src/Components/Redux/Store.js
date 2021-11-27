import{combineReducers,createStore}  from 'redux'
import  productReducer  from './Reducer/ProductReducer'
import  userReducer  from './Reducer/UserReducer'
import  buyReducer  from './Reducer/BuyReducer'


const reducer=combineReducers({productReducer,userReducer,buyReducer});
const store=createStore(reducer);
window.store=store;


export default store;
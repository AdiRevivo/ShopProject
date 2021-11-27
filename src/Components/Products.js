import React  from 'react'

import { connect } from 'react-redux';
import actions from './Redux/Action'
import milk from './images/milk.jpg'

// function mapStateToProps(state)
// {
//     return{
//         ProdName:state.productReducer.Products[0].prodName,
//         Price:state.productReducer.Products[0].price,
//         Amount:state.productReducer.Products[0].amount,
//         buy:state.buyReducer.buy[0].prodName

//     }
// }

const mapStateToProps = state => {
    
    return{
        Products:state.productReducer.Products
        
    }
}
const  mapDispatchToProps = (dispstch)=> ({
    // setAmountt:(amount,id)=> dispstch(actions.setAmountt(amount)),
    addCart:(Id,ProdName,Price,Amount)=>dispstch(actions.addCart({Id,ProdName,Price,Amount}))
});


export default connect(mapStateToProps,mapDispatchToProps)

(function Products (props)
{
    const {ProdName,Price,setAmountt,Amount,addCart,Products,Id}=props;
    
    
    return(
        <>
        <h1>רשימת מוצרים</h1>
        {props.Products.map(item=>
            <div class="card" style={{width: "18rem"}}>
            {/* <img src={milk} class="card-img-top" alt="..."> </img> */}
            <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">Name:{item.prodName}</p>
            <p class="card-text">Price:{item.price}</p>
            <p class="card-text">id:{item.id}</p>
            
            {/* <input type="number"  onChange={(e)=>setAmountt(e.target.value)}></input> */}
            
            
            <button class="btn btn-primary" onClick={()=>addCart(item.id,item.prodName,item.price,item.amount)} >הוסף לסל</button> 
            </div>
            </div>
            )}
            </>
            )
        }
        
        )
        
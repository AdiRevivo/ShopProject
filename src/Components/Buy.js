import React  from 'react'

import { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import actions from './Redux/Action'
import {  withRouter } from "react-router-dom";


const mapStateToProps = state => {
    
    return{
        Buy:state.buyReducer.buy
    }
}

const  mapDispatchToProps = (dispstch)=> ({
    //    setAmount:(id,amount)=> dispstch(actions.setAmount(id,amount)),
    removeProd:(buy)=>dispstch(actions.removeProd(buy)),
    plus:(buy)=>dispstch(actions.plus(buy)),
    minus:(buy)=>dispstch(actions.minus(buy)),
    
    
});

export default connect(mapStateToProps,mapDispatchToProps)

(function Buy (props)
{       
    const {Buy,removeProd,setAmount,id,history,plus,minus}=props;
    
    // useEffect(
    //     () => {
    //         alert("האם ברצונך לעבור לדף התשלום?")
    //     },
    //     []
    //     );
        
        
        function NextPage () {
            
            history.push('/Payment')            
        }
        return(
            <>            
            <button onClick={NextPage} >Go to home</button>
            
            <h1>סל הקניות</h1>
            {props.Buy.map(item=>
                <div class="card" style={{width: "18rem"}}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                <h5 class="card-title"></h5>
                
                <p class="card-text">Name:{item.ProdName} </p>
                <p class="card-text">Price:{item.Price}</p>
                <p class="card-text">Amount:{item.Amount}</p>
                <button class="btn btn-primary" onClick={()=>removeProd(item)} >מחק</button> 
                <button  value={item.Amount} onClick={()=>plus(item)}>+</button>
                <button  value={item.Amount} onClick={()=>minus(item)}>-</button>
                
                <p class="card-text">Amount:{item.Amount}</p>
                
                </div>
                </div> 
                )}
                </>
                )
            }
            
            )
            
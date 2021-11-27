import React  from 'react'

import { connect } from 'react-redux';
import actions from './Redux/Action'

const mapStateToProps = state => {
    
    return{
        Buy:state.buyReducer.buy
    }
}

const  mapDispatchToProps = (dispstch)=> ({
    // setAmount:(amount)=> dispstch(actions.setAmount(amount)),
    removeProd:(buy)=>dispstch(actions.removeProd(buy))
});
//  const sum=0

export default connect(mapStateToProps,mapDispatchToProps)

(function Payment (props)
{
    const {Buy}=props;
    let sum=0
    const  Total=()=>{
        Buy.forEach(element => {
            sum+=element.Amount*element.Price
        });
        return sum;
    }
    return(
        <>
        <h1>pay now</h1>    
        <table striped bordered hover>
        <thead>
        <tr className="row m-0">
        {/* <th>Picture</th> */}
        <th className="col-4">Name</th>
        <th className="col-4">Price</th>
        <th className="col-4">Amount</th>
        </tr>
        </thead>
        <tbody>{Buy.map(item =>
            <tr  className="row m-0">
            {/* <td><Image fluid src={products.pic}></Image></td> */}
            <td className="col-4">{item.ProdName}</td>
            <td className="col-4">{item.Price*item.Amount}</td>
            <td className="col-4">{item.Amount}</td>
            </tr>
            ) }
            </tbody>
            </table>
            <p>The Total: {Total()}</p>
            
            
            </>
            )
        })
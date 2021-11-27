
import React  from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state)
{
    return{
        userName:state.userReducer.users[0].UserName
    }
}

export default connect(mapStateToProps)(function User (props){
    const {userName}=props; 
    <>
    <h1>hwlll</h1>
    <h1>{userName}</h1>
    </>
})
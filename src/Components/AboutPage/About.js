

import React, { useState } from 'react'


export default  function About(props)
{
    
    const[ThisPage,setThisPage]=useState(0)
    const NumOfPages=React.Children.count(props.children)
    
    function PageComponent(bla)
    {
        const child=React.Children.toArray(props.children)[bla]
        return React.cloneElement(child) 
    }
    
    
    return(
        <>
        
        
        
        <h1>About Page</h1>
        <button type="button" class="btn btn-primary" disabled={ThisPage>=NumOfPages-1} 
        onClick={()=>setThisPage(v=>v+1)}>next</button>
        
        <button type="button" class="btn btn-primary" disabled={ThisPage===0}
        onClick={()=>setThisPage(v=>v-1)}>Prev</button>
        
        {PageComponent(ThisPage)}       
        </> 
        
        )
    }
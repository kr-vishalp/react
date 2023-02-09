import React,{useState} from 'react'

function Usestate() {
    const [count,setCount] = useState(0)
    // setcount is not bind function 
    // so we have requied to call this as a arrow function 
  return (
    <div>Usestate
    <button onClick={()=>{{setCount(count+1)}}}>click{count}</button>
    
    </div>
  )
}

export default Usestate
import React,{useState} from 'react'

function Usestate2() {
    const [vishal,setVishal] = useState({firstname:' ',lastname:''})
    // ... vishal is used to access all object value in setfunctin
  return (
    <div>
    <input onChange={e=>setVishal({ ...vishal,firstname:e.target.value})} />
    <input onChange={e=>setVishal({ ...vishal ,lastname:e.target.value})} /> 
    <p>firstname is {vishal.firstname}</p>
    <p>lastname is {vishal.lastname} </p>
    </div>
  )
}

export default Usestate2
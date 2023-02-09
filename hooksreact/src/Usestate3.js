import React,{useState} from 'react'

function Usestate3() {
    const[name,setName] = useState([])
    const additem = ()=>{
        setName([{
       id:name.length,
       value: Math.floor(Math.random()*100+1)
        },...name])
    }
  return (
    <div>
      <button onClick={()=>{additem()}}>clickfor number</button> 
      {console.log(name)}
      <ul>
        {
            name.map(num =>{ 
                return <li key={num.id}>{num.value}</li>
         } )
        }
      </ul> 
    </div>
  )
}

export default Usestate3
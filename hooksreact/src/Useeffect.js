import React,{useState,useEffect} from 'react'

function Useeffect() {
    
    const [count,setCount] = useState(0);
   useEffect(
    ()=>{
        document.title =`you clicked ${count} times `
        // useeffect call after every rendering in component 
    }
   )

  return (
    <div>
    {count}
    <br></br>
      <button onClick={()=>setCount(count+1)}>inc{count}</button> 
    </div>
  )
}

export default Useeffect
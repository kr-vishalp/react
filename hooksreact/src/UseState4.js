import React,{useState}from 'react'

function UseState4() {
    const [name,setName] = useState("")
     const fuin = (e)=>{
        setName(e.target.value)
        //console.log(name)
       
     }
  const disname = ()=>{
    // document.write("hello"+ " "+name)
    alert("hello"+name)
     }
  return (
    <div>useState4
    <input onChange={(e)=>fuin(e)} />
    <button onClick={()=>disname()}>your name </button>
    </div>
  )
}

export default UseState4
import React, { Component } from 'react'

export class Input extends Component {
 constructor(){
    super()
    this.state={
        username:'nam'
    }
 }
 inputhandle= (event)=>{
    this.setState(
        {
            username:event.target.value
        }
    )
    
 }
 change = ()=>{
    var name1 = 
    alert(this.state.username)
 }
    render() {
    return (
      <div>
      <label>name: </label>
        <input type="text" name ="username" onChange={(event)=>this.inputhandle(event)}/>
        <br/>
        <input type="button" onClick={()=>this.change()} name = "submit" value ="submit"/>
      </div>
    )
  }
}

export default Input
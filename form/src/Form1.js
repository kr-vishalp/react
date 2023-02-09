import React, { Component } from 'react'

export class Form1 extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name:"",
      password:""
     
    }
  }
  handlename = (e)=>{
  this.setState(
    {
      name:e.target.value
    }
  )
  }
  handlepass = (e)=>{
this.state(
  {
  password:e.target.value
  }
)
  }
  handlebutton = ()=>{
    alert("hello"+this.state.name);
  }
  render() {
    return (
      <div>
        <form>
          <label>Name: </label>
            <input type = "text" onChange={(e)=>{this.handlename()}}></input> <br/>
        <label>password: </label>
        <input type ="password"onChange={(e)=>{this.handlepass()}} ></input> <br/>
        <input type="button" value="submit" onClick={()=>{this.handlebutton()}}></input>
        </form>
      </div>
    )
  }
}

export default Form1
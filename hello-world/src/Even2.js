import React, { Component } from 'react'

export class Even2 extends Component {
    constructor(){
        super()
        this.state = {
            message : "hello"
        }
    }
    changed(){
       this.setState({
        message:"byy"
       })
       console.log(this.state.message)
    }
    vishal = ()=>{
      this.setState(
        {message:"ty"}
      )
     
    }
  render() {
    return (
      <div>
        <h2>hello this is a vishal{this.state.message}</h2>
        <button onClick={()=>this.changed()}></button>
       <button onClick={this.vishal()}>button2</button>
      </div>
    )
  }
}

export default Even2
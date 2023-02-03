import React, { Component } from 'react'

export class Inputdata extends Component {
    constructor(){
        super()
        this.state ={
            name:"a"
        }
    }
    changed = (event)=>{
        this.setState({
            name:event.target.value
        })
        console.log(this.state.name)
    }
  render() {
     
    return (
      <div>
        <input value={this.state.name} onChange={(event)=>this.changed(event)}  />
      </div>
    )
  }
}

export default Inputdata
import React, { Component } from 'react'

export class First extends Component {
    constructor(){
        super()
        this.state = {
            count :0
        }
    }
    count1(){
      this.setState({
      count:"message"
    
      })
      console.log(this.state.count);
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.count1()}>button1</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default First;
import React, { Component } from 'react'

export class Child2 extends Component {
    constructor(props){
        super(props)
        this.state={

          change:"enkn"
        }
    }
  
  getinput=(e) =>{
    this.setState({change:e.target.value})
  }
  render() {
    return (
     <div>
      <input onChange={(e)=>{this.getinput(e)}} />
      <button onClick={() => {this.props.value1(this.state.change)}}>click me</button>
     </div>
    
    )
  }
}

export default Child2
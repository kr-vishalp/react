import React, { Component } from 'react'
import Child1 from './Child1'



export class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
          msg1:"hy"
        }
    }
  render() {
    return (
    
      <div>
        <div>
         <Child1 value = {this.state.msg1}/>
        </div>
      </div>
    )
  }
}

export default Parent
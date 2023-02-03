import React, { Component } from 'react'
import Child2 from './Child2'

export class Parent2 extends Component {
    constructor(){
        super()
        this.state ={
            name1:"hello"
        }
        this.changetext= this.changetext.bind(this);
    }

  changetext(value){
    console.log(value);
    this.setState({ 
      name1:value
    })
   }
  render() {
    return (
      <div>
        <div>{this.state.name1}</div>
        
       <Child2 value1={this.changetext}/>
      </div>
    )
  }
}

export default Parent2
import React, { Component } from 'react'

export class Child extends Component {
    constructor(){
        super();
    }
  render() {
    return (
      <div>{this.props.getname1()}</div>
      
    )
  }
}

export default Child
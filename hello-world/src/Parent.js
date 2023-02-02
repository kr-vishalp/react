import React, { Component } from 'react'
import Child from './Child';

export class Parent extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            fisrtname:"vishal"
        }
        this.name1 =this.name1.bind(this);
    }
    name1(){
        document.write("hello");
    }
  render() {
    return (
      <div>
        <Child getname1 ={this.name1}/>
      </div>
    )
  }
}

export default Parent
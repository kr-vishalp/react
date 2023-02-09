import React, { Component } from 'react'
import Regucom from './Regucom'
import Pureco from './Pureco'

export class Parentcom extends Component {
    constructor(){
        super()
            this.state={
                name:"vishal"
            
        }
    }
    componentDidMount(){
       setInterval(()=>{
        this.setState(
            {
                name:"vishal"
            }
        )
       },2000)
       } 
    // we can just call one time purecom 
  render() {
    console.log("parent")
    return (
      <div>
      parent
      <Regucom/>
      <Pureco/>
      </div>
      
    )
  }
}

export default Parentcom
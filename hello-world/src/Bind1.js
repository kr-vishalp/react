import React, { Component } from 'react'

export class Bind1 extends Component {
    constructor(){
        super()
        this.state={
            parentname:"parent"
        }
        this.chan= this.chan.bind(this);
    }
    chan(){
        console.log("i am working on bind method")
    }
  render() {
    
    return (
      <div>
     <h2>{this.chan()}</h2>
      </div>
    )
  }
}

export default Bind1
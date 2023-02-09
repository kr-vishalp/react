import React, { Component } from 'react'

export class Ref extends Component {
    constructor(){
        super()
        this.ref1 = React.createRef()
    }
    // this is a used to handle parent dom 
     eventhandel = ()=>{
this.ref1.current.focus();
console.log("hello")
alert(this.ref1.current.value)

this.ref1.current.style.backgroung ='green';
    }
  render() {
    return (
      <div>
        <input ref={this.ref1} text = "text" />
        <button onClick={this.eventhandel}>clickme</button>
      </div>
    )
  }
}

export default Ref
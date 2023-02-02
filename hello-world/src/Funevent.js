import React, { Component } from 'react'

export class Funevent extends Component {
     onclickb() {
        document.write("hello goodmorning");
    }
  render() {
    return (
      <div>
        <h1>
          click here for some new things 
        </h1>
        <button onClick={()=>this.onclickb()}>button</button>
      </div>
    )
  }
}

export default Funevent;
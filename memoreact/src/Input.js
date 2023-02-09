import React, { Component } from 'react'

export class Input extends Component {
    constructor(){
        super()
        this.ref2 = React.createRef()
    }
    focusinput(){
        console.log("focus or not")
        this.ref2.current.focus()
    }
  render() {
    return (
      <div>
        <input ref = {this.ref2} type ="text"/>
      </div>
    )
  }
}

export default Input
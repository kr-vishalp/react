import React, { Component } from 'react'
import Input from './Input'

export class Refinput extends Component {
    constructor(props){
        super(props)
        this.inputref = React.createRef()
    }
    handleevent = ()=>{
        this.inputref.current.focusinput()
    }
  render() {
    return (
      <div>
        <Input ref={this.inputref}/>
        <button onClick={this.handleevent}>focus button</button>
      </div>
    )
  }
}

export default Refinput
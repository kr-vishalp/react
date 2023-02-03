import React, { Component } from 'react'

export class Child1 extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:"hello"
        }
    }
    change(){
        console.log("change",this.props.value);
        this.setState({
         msg: this.props.value
        })
    }
  render() {
    console.log("render",this.state.msg);
    return (
      <div>
        <div>{this.state.msg}</div>
        <button onClick={()=>this.change()}>click for change</button>
      
      </div>
    )
  }
}

export default Child1
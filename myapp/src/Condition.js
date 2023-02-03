import React, { Component } from 'react'

export class Condition extends Component {
    constructor(){
        super()
        this.state={
            pop:false
        }
    }
  render() {
    // let message
    // if(this.state.pop){
    // message = <div>welcome back</div>
    // }else{
    //     message = <div>you are not loging </div>
    // }
    // return (
    //   <div>{message}</div>
    // )
   return(
    this.state.pop?<div>loging is done now</div>:<div>log in is not done</div>
   )
}
   
}

export default Condition
import React, { Component } from 'react'

export class Mount extends Component {
    constructor(){
        // first calle in mounting
        // used for value intialition 
        console.log("constructor")
        super()
        this.state={
            name:"vishal"
        }
    }
    static getDerivedStateFromProps(){
        // call brfore render and after constructor
        console.log("getDerivedFromProps")
    }
    componentDidMount(){
        // after render its call 
        console.log("componentdidmount");
    }
    
  render() {
    // always requried 
    console.log("render")
    return (
      <div>Mount</div>
    )
  }

}

export default Mount
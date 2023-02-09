import React, { Component } from 'react'
import Memo from './Memo'

export class Parent extends Component {
    constructor(){
        super()
        this.state={
            name:"vishal"
        }
    }
    componentDidMount(){
        setInterval(
            ()=>{
                this.setState({
                    name:"vishal"
                })
            },2000
        )
    }
  render() {
    console.log("parent")
    return (
      <div>Parent
      <Memo name = {this.state.name} />
      </div>
    )
  }
}

export default Parent
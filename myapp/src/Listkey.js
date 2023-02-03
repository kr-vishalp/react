import React, { Component } from 'react'
import Lkparent from './Lkparent'


export class Listkey extends Component {
   
  render() {
    const obj = {
        name:"visha",
        fisrtname:"baraiya",
        work:"software devloper"
    }
    return (
       
      <div>
      <Lkparent value = {obj}/>
      {obj.name+"hello " +obj.fisrtname}</div>
    )
  }
}

export default Listkey
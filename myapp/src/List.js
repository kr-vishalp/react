import React, { Component } from 'react'

export class List extends Component {
  render() {
    const name = ["vishal","payal","jay","raju"]
const vishal =name.map(num1=><h2>{name}</h2>)
const array=[1,2,3,4]    
const array1 = array.map((num)=> num*2)
return (
      <div>

  
<div>{vishal}</div>
<div>{array1[1]}</div>

        {/* <div>{name[0]}</div>
        <div>{name[1]}</div>
        <div>{name[2]}</div>
        <div>name[3]</div> */}
        {/* <div>{name.mape}</div> */}
      </div>
    )
  }
}

export default List
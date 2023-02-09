import React, { Component } from 'react'

export class Update extends Component {
    static getDrivedStateFromProps(){
        console.log("getdrivedfromstateprops");
    }
    shouldComponentUpdate(){
        console.log("shouldcomponentupdate")
        return true;
    }
    getSnapshotBeforeUpdate(){
  console.log("getsnapshotbeforeupdate")
    }
    componentDidUpdate(){
console.log("componentdidupadate")
    }
  render() {
    console.log("render")
    return (
      <div>Update</div>
    )
  }
}

export default Update
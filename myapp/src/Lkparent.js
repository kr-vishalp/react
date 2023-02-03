import React, { Component } from 'react'

export class Lkparent extends Component {
  render() {
    return (
      <div>{JSON.stringify(this.props.value)+ "123"}</div>
    )
  }
}

export default Lkparent
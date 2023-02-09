import React, { Component } from 'react'
import Columns from './Columns'

export class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <Columns/> 
          </tr>
        </table>
      </div>
      // after tr tag we can see div tag in console for remove this we can just used react.fragment tag
    )
  }
}

export default Table
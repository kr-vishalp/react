import React from 'react'

function Memo(name) {
    console.log("hello memo")
  return (
    // its work same as purecomponent in class but its used in the function component 
    <div>Memo{name}</div>
  )
}

export default  React.memo(Memo)
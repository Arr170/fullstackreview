import React from 'react'
//component rendering names and numbers
const Names = (props) =>{
    return(
      <div>
      {props.nameArrey.map(names => <p key = {names.id}>{names.name} {names.number}</p>)}
      </div>
    )
  }

export default Names
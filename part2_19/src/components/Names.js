import React from 'react'
import RemoveName from './removeBtn'
//component rendering names and numbers
const Names = (props) =>{
    return(
      <div>
      {props.nameArrey.map(names => <p key = {names.id}>{names.name} {names.number}<RemoveName id = {names.id} name = {names.name} onDelete = {props.onDelete}/></p>)}
      </div>
    )
  }

export default Names
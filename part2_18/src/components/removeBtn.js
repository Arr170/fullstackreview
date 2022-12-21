import React from 'react'
//button for removing name from server
const RemoveName = ({id, name, onDelete}) => {
    console.log('id removeBtn got', id, name)
    
    
    return(
        <button onClick = {()=>onDelete(name = name, id = id)}>delete</button>
    )

}

export default RemoveName
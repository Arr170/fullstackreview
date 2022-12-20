import React from 'react'
import serviceNames from 'C:\\Users\\arsen\\fullstackopen\\part2_17\\src\\services\\contacts.js'
//button for removing name from server
const RemoveName = ({id, name, onDelete}) => {
    console.log('id removeBtn got', id, name)
    
    
    return(
        <button onClick = {()=>onDelete(name = name, id = id)}>delete</button>
    )

}

export default RemoveName
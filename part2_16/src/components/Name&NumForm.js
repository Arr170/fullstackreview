import React from 'react'
const NameNumForm = (props) => {
    return(
        <form onSubmit = {props.onSubmit}>
        <h3>Add new</h3>
        <div>
          name: <input value = {props.nameValue} onChange = {props.nameOnChange}/>
        </div>
        <div>
          number: <input value ={props.numValue} onChange = {props.numOnChange} type = "number"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default NameNumForm
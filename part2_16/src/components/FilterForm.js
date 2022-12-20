import React from 'react'
const FilterForm = (props) =>{
    return(
        <form>
        find by name: <input value = {props.value} onChange={props.onChange}/>
      </form>
    )
}
export default FilterForm
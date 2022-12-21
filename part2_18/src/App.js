import { useState, useEffect } from 'react'
import React from 'react'
import isEqual from 'C:\\Users\\arsen\\fullstackopen\\part2.6_10\\node_modules\\lodash\\isEqual.js'
import Names from './components/Names'
import FilterForm from './components/FilterForm'
import NameNumForm from './components/Name&NumForm'
import serviceContacts from './services/contacts'



const App = () => {
  //storing searching
  const [find, setFind] = useState('')
  //filter bool
  const [filter, setFilter] = useState(false)
  //storing names arrey
  const [names, setNames] = useState([])
  //geting names from server and soring them in names arrey
  useEffect(() => {
    serviceContacts
      .getAll()
      .then(response => {setNames(response)})
  }, []) 
  //storing filtred names
  let namesToShow = names
  if(filter){namesToShow = names.filter(name => name.name.includes(find))}
  else{namesToShow = names}
  //storing input name
  const [newName, setNewName] = useState('')
  //storing input number
  const [newNumber, setNewNumber] = useState('')
  //handling name input
  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    console.log(newName)
  }
  //handeling number input
const handleNewNumber = (event) => {
  console.log(event.target.value)
  setNewNumber(event.target.value)
}
  //handling searching for names and filtering
  const handleFindInput = (event) =>{
     
    setFind(event.target.value)
    setFilter(true)
    console.log('filter?', event.target.value, filter)
    if(isEqual(event.target.value, '')){
      
      setFilter(false)
      console.log('filter off', filter)
    }
    
  }
  //adding new name and number to "names" arrey
  const newNameAdd = (event) =>{
    event.preventDefault()
    console.log('button clicked', event.target)
    const comparingName = names.find(element => isEqual(element.name, newName))
    const comparingNumber = names.find(element => isEqual(element.number, newNumber))
    console.log('comparingName', comparingName)
    console.log('comparingNumber', comparingNumber)
    // dublicate name check and adding new object to "names" arrey and server
    if(comparingName === undefined){
      if(comparingNumber === undefined){
        const toBeAdded = { 
          name: newName,
          number: newNumber,
        }
        serviceContacts
          .create(toBeAdded)
          .then(response => {
            setNames(names.concat(response))
            setNewName('')
            setNewNumber('')})
        }
      else{alert(newNumber + ' is added to different name already!')} //num alert
    }
    else {alert(newName + " is existing already u dumbass")} //name alert
  }
  //deleting names
  const deleteName = (name, id) => {
    console.log('deleteName got', id, name)
    if(window.confirm('delete '+name+'?')){
        serviceContacts
          .remove(id)
        setTimeout(() => {
          serviceContacts
            .getAll()
            .then(respond => setNames(respond))
        }, 200)
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <FilterForm value = {find} onChange = {handleFindInput}/>
        <NameNumForm nameValue = {newName} nameOnChange = {handleNewName} numValue = {newNumber} numOnChange = {handleNewNumber} onSubmit = {newNameAdd}/> 
      <h2>Numbers</h2>
      <Names nameArrey = {namesToShow} onDelete = {deleteName}/>
    </div>
  )
}
export default App
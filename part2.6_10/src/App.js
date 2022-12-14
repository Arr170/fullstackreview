import { useState } from 'react'
import React from 'react'
import isEqual from 'C:\\Users\\arsen\\fullstackopen\\part2.6_10\\node_modules\\lodash\\isEqual.js'
import Names from './components/Names'
import FilterForm from './components/FilterForm'
import NameNumForm from './components/Name&NumForm'



const App = () => {
  //storing searching
  const [find, setFind] = useState('')
  //filter bool
  const [filter, setFilter] = useState(false)
  //storing names arrey
  const [names, setNames] = useState([
    { name: 'Arto Hellas',
      number: '777 777 000',
      id: 1,
      
     },
     {
      name: 'arsenij',
      number: '684654',
      id: 2,
     },
     {
      name: 'Nikita',
      number: '6588245',
      id:3
     }
  ]) 
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
    // dublicate name check
    if(comparingName === undefined){
      if(comparingNumber === undefined){
        const toBeAdded = { 
          name: newName,
          number: newNumber,
          id: names.length + 1,
        }
        setNames(names.concat(toBeAdded))
        setNewName('')
        setNewNumber('')
        }
      else{alert(newNumber + ' is added to different name already!')} //num alert
    }
    else {alert(newName + " is existing already u dumbass")} //name alert
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <FilterForm value = {find} onChange = {handleFindInput}/>
        <NameNumForm nameValue = {newName} nameOnChange = {handleNewName} numValue = {newNumber} numOnChange = {handleNewNumber} onSubmit = {newNameAdd}/> 
      <h2>Numbers</h2>
      <Names nameArrey = {namesToShow}/>
    </div>
  )
}
export default App
import { useState, useEffect } from 'react'
import React from 'react'
import isEqual from 'C:\\Users\\arsen\\fullstackopen\\part2.6_10\\node_modules\\lodash\\isEqual.js'
import Names from './components/Names'
import FilterForm from './components/FilterForm'
import NameNumForm from './components/Name&NumForm'
import serviceContacts from './services/contacts'
import './App.css'
const cors = require('cors')



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
  //constantes for succes or error messages
  const [succesMsg, setSuccesMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
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
  //printing succes message
  const SuccesMsg = ({message}) => {
    if (message === null){return null}
    setTimeout(() => setSuccesMsg(null), 5000)
    return(
      <div className = 'messageOK'>
        {message}
      </div>
    )
  }
  // printing error message
  const ErrorMsg = ({message}) => {
    if(message === null){return null}
    setTimeout(() => setErrorMsg(null), 5000)
    return(
      <div className = 'messageError'>
        {message}
      </div>
    )
  }
  //adding new name and number to "names" arrey
  const newNameAdd = (event) =>{
    event.preventDefault()
    console.log('button clicked', event.target)
    const comparing = names.find(element => isEqual(element.name, newName))
    console.log('comparing', comparing)
    //updating number for name
    const updateName = (id, toBeUpdated) => {
      serviceContacts
        .update(id, toBeUpdated)
        .then(response => {setNames(names.map(name => name.id !== id ? name : response))})
        .catch(error => {
          setErrorMsg(error.response.data.error)
          console.log(error.response.data.error)
        })
    }
    // dublicate name check, if there is a dublicate, offers a change, if there is no dublicate adding new object to "names" arrey and server
    if(comparing === undefined){

        const toBeAdded = { 
          name: newName,
          number: newNumber,
        }
        serviceContacts
          .create(toBeAdded)
          .then(response => {
            setNames(names.concat(response))
            setNewName('')
            setNewNumber('')
            setSuccesMsg(newName + ' is added to your contacts')})
          .catch(error => {
            setErrorMsg(error.response.data.error)
            console.log(error.response.data.error)
          })
         
        
        }
    else {
      if(window.confirm(newName + ' is in your contacts already, update number?')){
      const toBeUpdated ={
        name: newName,
        number: newNumber,
      }
      updateName(comparing.id, toBeUpdated)

      } 
  }}
  //deleting names
  const deleteName = (name, id) => {
    console.log('deleteName got', id, name)
    if(window.confirm('delete '+name+'?')){
        serviceContacts
          .remove(id)
          .catch(error => {
            setErrorMsg(name + ' was already removed from your contacts')
          })
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
      <ErrorMsg message = {errorMsg}/>
      <SuccesMsg message = {succesMsg}/>
      <FilterForm value = {find} onChange = {handleFindInput}/>
      <NameNumForm nameValue = {newName} nameOnChange = {handleNewName} numValue = {newNumber} numOnChange = {handleNewNumber} onSubmit = {newNameAdd}/> 
      <h2>Numbers</h2>
      <Names nameArrey = {namesToShow} onDelete = {deleteName}/>
    </div>
  )
}
export default App
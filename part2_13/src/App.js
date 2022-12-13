import { useState, useEffect } from 'react'
import axios from 'axios'
import {FindCountries, ShowCountries} from './components/countriesTool'
import SearchForm from './components/searchForm'



const App = () => {
  const a = 'ars'
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [foundCountries, setFoundCountries] = useState([])
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')
  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log('searching for', event.target.value, 'in', countries)
    setFoundCountries(FindCountries(event.target.value, countries))
  }
  
  return(
    <div>
      <SearchForm value = {search} onchange = {handleSearch} />
      <ShowCountries toShow = {foundCountries}/>
    </div>
  )
}
export default App
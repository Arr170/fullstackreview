import {useState} from 'react'
import React from 'react'
///
const ShowOneCountry  = ({toShow, bool}) => {
    console.log('show one country', toShow, bool)
    if(bool)
    {
    return(
        <div>
            here we go
        </div>
    )
    }
    else
    {
        return(<></>)
    }
}
///
const ShowCountries = ({toShow}) => {
    const [showOne, setShowOne] = useState(false)

    const turnShow = (event) => {
        // event.preventDefault()
        console.log('button pressed')
        setShowOne(true)
    }

    //console.log('to show:', toShow)

    if(toShow.length === 1)
    {
        console.log('showing one country', toShow)
        console.log(toShow[0].flags.png)
        return(
            <div>
            <h2>{toShow[0].name.official}</h2>
            <p>capital: {toShow[0].capital}</p> 
            <p>area: {toShow[0].area}</p>
            <p>languages:</p>
            {Object.values(toShow[0].languages).map(lang => <li key = {lang}>{lang} </li>)}
            <img src = {toShow[0].flags.png}/>
            </div>
        )
    }
    else if(toShow.length > 10)
    {
        console.log('showing more then 10')
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else
    {
        return(
            <div>
                {toShow.map(country => <div><p key = {country.name.official}>{country.name.official}      <button onClick = {() =>turnShow()}>show</button></p><ShowOneCountry toShow = {country} bool = {showOne}/></div>)}
                
            </div>
        )
    }
}
///
function FindCountries(toFind, whereLook) {
    console.log("toFind, whereLook", toFind, whereLook)
    let found
    found = whereLook.filter(country => country.name.official.includes(toFind))
    console.log('i found:', found)
    return(found)
}

export  {FindCountries, ShowCountries}
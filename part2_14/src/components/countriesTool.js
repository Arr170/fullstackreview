
import {useState} from 'react'
import React from 'react'
import Weather from './weather'


///called when only one country is going to be showed
const ShowOneCountry  = ({toShow, bool}) => {
    console.log('show one country', toShow, bool)
    if(bool)
    {
    return(
        <div>
            <h2>{toShow.name.official}</h2>
            <p>capital: {toShow.capital}</p> 
            <p>area: {toShow.area}</p>
            <p>languages:</p>
            {Object.values(toShow.languages).map(lang => <li key = {lang}>{lang} </li>)}
            <img src = {toShow.flags.png}/>
            <Weather toShow = {toShow}/>
        </div>
    )
    }
    else
    {
        return(<></>)
    }
}


///showing countries, called every time after change in input
const ShowCountries = ({toShow}) => {
    const [showOne, setShowOne] = useState(false)
    const [mediator, setMediator] = useState()

    const turnShow = (medi) => {
        setMediator(medi)
        console.log('button pressed')
        if(showOne){setShowOne(false)}else{setShowOne(true)}
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
            <Weather toShow = {toShow[0]}/>
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
                {toShow.map(country => <div><p key = {country.name.official}>{country.name.official}      <button onClick = {() =>turnShow(country)}>show</button></p></div>)}
                <ShowOneCountry toShow = {mediator} bool = {showOne}/>
            </div>
        )
    }
}


///findes country that matches with input
function FindCountries(toFind, whereLook) {
    console.log("toFind, whereLook", toFind, whereLook)
    let found
    found = whereLook.filter(country => country.name.official.includes(toFind))
    console.log('i found:', found)
    return(found)
}



export  {FindCountries, ShowCountries}
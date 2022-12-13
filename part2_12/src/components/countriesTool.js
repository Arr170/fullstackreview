

const ShowCountries = ({toShow}) => {
console.log('to show:', toShow)
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
         <p>
         <img scr = {toShow[0].flags.png} alt = "flag" width = "100" height="100"/>
         </p>
         
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
            {toShow.map(country => <li key = {country.name.official}>{country.name.official}</li>)}
        </div>
    )
}
}

function FindCountries(toFind, whereLook) {
console.log("toFind, whereLook", toFind, whereLook)
let found
found = whereLook.filter(country => country.name.official.includes(toFind))
console.log('i found:', found)
return(found)
}

export  {FindCountries, ShowCountries}
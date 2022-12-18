import {useState, useEffect} from 'react'
import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY

const Weather =({toShow}) => {
    console.log('weather to Show', toShow)
    const [weather, setWeather] = useState([])
    const lat = toShow.capitalInfo.latlng[0]
    console.log('lat', lat)
    const lon = toShow.capitalInfo.latlng[1]
    console.log('lon', lon)
    const API = 'https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'lon='+lon+'&appid='+api_key
    useEffect(() => {
        console.log('effect weather')
        axios
          .get(API)
          .then(response => {
            console.log('promise fulfilled')
            setWeather(response)
          })
      }, [])
      return(
        <div>
            <h3>Weather</h3>
            <p>{weather.cod}</p>
        </div>
        
        )

}

export default Weather
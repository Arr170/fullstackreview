import {useState, useEffect} from 'react'
import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY

const Weather =({toShow}) => {
    console.log('weather to Show', toShow)
    const [weather, setWeather] = useState(null)
    const lat = toShow.capitalInfo.latlng[0]
    console.log('lat', lat)
    const lon = toShow.capitalInfo.latlng[1]
    console.log('lon', lon)
    const API = 'https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon='+lon+'&appid='+api_key
    console.log('api', API)

    useEffect(() => {
        console.log('effect weather')
        axios
          .get(API)
          .then(response => {
            console.log('promise fulfilled')
            setWeather(response)
          })
      }, [])
      
      console.log('reading from',weather)
      const temp = weather && weather.data.current.temp
      const iconSrc = weather && weather.data.current.weather[0].icon
      console.log('icon Src', iconSrc)
      const icon = 'http://openweathermap.org/img/wn/'+iconSrc+'@2x.png'
      console.log('icon', icon)
      const wind = weather && weather.data.current.wind_speed
      const description = weather && weather.data.current.weather[0].description

      console.log(description)
      return(
        <div>
            <h3>Weather in {toShow.capital}</h3>
            <p>temperature: {(273 - temp).toFixed(1)} °C</p>
            <img src = {icon} alt = 'img'/>
            <p>{description}</p>
            <p>wind {wind} m/s</p>
        </div>
        
        )

}

export default Weather
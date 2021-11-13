import axios from "axios";
import React, { useState, useEffect } from "react";



const CountryItem= ({name, capital, pop, langs, flag}) => {
    let apiKey = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/forecast?access_key=${apiKey}&query=${capital}`)
        .then(res => {
            setWeather(res.data.current)
        })
    }, [apiKey, capital])

    
        let languages = Object.entries(langs).map(l => {
            return <li>{l[1]}</li>
        })
     
        return (
            <div>
                <h1>{name}</h1>
                <p><b>Capital:</b> {capital}</p>
                <p><b>Population:</b> {pop}</p>
                <p><b>Languages Spoken:</b></p>
                <ul>
                    {languages}
                </ul>
                <img src={flag} alt="flag"></img>
                <p><b>Weather in {capital}</b></p>
                <h5>Temperature: {weather.temperature} Celsius</h5>
                <img src={weather.weather_icons} alt="weather"></img>
                <h5>Wind: {weather.wind_speed}mph direction {weather.wind_dir} Celsius</h5>
            </div>
        )
}

export default CountryItem;
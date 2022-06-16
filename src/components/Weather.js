import React from 'react'

export default function Weather({ weatherData }) {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <div style={{width:"400px",height:"500px",}}>
                <p>Country:        {weatherData.sys.country}
                </p>
                <p>Temprature: {weatherData.main.temp}</p>
                <p>Temprature Max: {weatherData.main.temp_max} &deg;C</p>
                <p>Temprature Min: {weatherData.main.temp_min} &deg;C</p>
                <p>Sunrise: {weatherData.sys.sunrise}</p>
                <p>Sunset: {weatherData.sys.sunset}</p>
                <p>Humidity: {weatherData.main.humidity} %</p>
                <p>Pressure: {weatherData.main.pressure}</p>
                <p>SeaLevel: {weatherData.main.sea_level}</p>
                <p>Description: {weatherData.weather[0].description}</p>
            </div>
        </div>
    )
}

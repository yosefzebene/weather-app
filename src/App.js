import React, { useState } from "react";
import WeatherApp from "./components/WeatherCard";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const API_KEY = "ef9c467a711445bcb38c9a9e7583ea8c";
const LOCATION_URI = "https://api.openweathermap.org/geo/1.0/direct?limit=1&appid=";
const WEATHER_URI = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid="

const App = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const searchLocation = (e) => {
        if (e.key === 'Enter') {
            axios.get(`${LOCATION_URI}${API_KEY}&q=${location}`).then((l) => {
                axios.get(`${WEATHER_URI}${API_KEY}&lat=${l.data[0].lat}&lon=${l.data[0].lon}`).then((response) => {
                    setData(response.data)
                })
            });
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="app">
                <div className="search">
                    <input 
                        className="form-control"
                        type="search"
                        placeholder="Search" 
                        aria-label="Search" 
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        onKeyDown={searchLocation}
                    />
                </div>
                <div className="h-75 d-flex justify-content-center align-items-center"><WeatherApp data={data} /></div>
            </div>
        </div>
    )
}

export default App;
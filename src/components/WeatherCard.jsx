import React from "react";

const WeatherApp = ({ data }) => {
    return (
        <div className="card" style={{width: 40 + 'rem'}}>
            <div className="card-body">
                <h5 className="card-title text-center">{data.name ? data.name : "Enter Location"}</h5>
                <h1 className="text-center fw-bold">{data.main ? Math.round(data.main.temp) : "-"}°C</h1>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col text-center">
                                <h5 className="fw-bold">{data.main ? Math.round(data.main.feels_like) : "-"}°C</h5>
                                <p>Feels like</p>
                            </div>
                            <div className="col text-center">
                                <h5 className="fw-bold">{data.main ? Math.round(data.main.humidity) : "-"}%</h5>
                                <p>Humidity</p>
                            </div>
                            <div className="col text-center">
                                <h5 className="fw-bold">{data.main ? Math.round(data.wind.speed) : "-"} KM/H</h5>
                                <p>Wind speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;
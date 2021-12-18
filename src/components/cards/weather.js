import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import data from "bootstrap/js/src/dom/data";
import WeatherData from "./weatherData";



function Weather() {
    const [weath, setWeather] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {

        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Oujda,ma&appid=981e5f48d92d8ff3d1c8aa06898c7d23')
            .then(res => {
                setWeather(res.data);
                console.log(res.data)

            }).catch(error => alert("eroor weather !!"));
    }, [])
    return(

                <div className="container p-0">

                    <div className="row d-flex  ">
                        <div className="">
                          <WeatherData
                              city={weath.name}
                             // time={weather.}
                              temirature={weath.temp}
                              state={weath.feels_like}
                              image={weath.icon}
                              wind={weath.speed}
                              humidity={weath.humidity}
                          />

                        </div>
                    </div>

                </div>
    )
}
export default Weather;
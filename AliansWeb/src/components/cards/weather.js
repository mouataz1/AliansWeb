import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import data from "bootstrap/js/src/dom/data";
import WeatherData from "./weatherData";



function Weather() {
    const [datax, setDatax] = useState({});
    const [search, setSearch] = useState('')
    useEffect(async () => {

        await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Oujda,ma&appid=981e5f48d92d8ff3d1c8aa06898c7d23')
            .then(res => {
                setDatax({city: res.data.name, temp: res.data.main.temp, state: res.data.main.feels_like, icon: res.data.weather[0].icon, wind: res.data.wind.speed, humidity: res.data.main.humidity});
                //console.log(res.data)

            }).catch(error => alert("eroor weather !!"));
    }, [])
    return(

                <div className="container p-0">

                    <div className="row d-flex  ">
                        <div className="">
                          <WeatherData
                              city={datax.city}
                              temirature={datax.temp}
                              state={datax.state}
                              image={datax.icon}
                              wind={datax.wind}
                              humidity={datax.humidity}
                          />

                        </div>
                    </div>

                </div>
    )
}
export default Weather;
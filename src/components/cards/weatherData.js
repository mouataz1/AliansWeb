import React from "react";




const WeatherData = ({city, time, temirature, state, image, wind, humidity}) => {
    return(
        <div className="card " style={{color: '#ffff', borderRadius: '5px', heght: '100px', backgroundColor: '#554BC5'}}>
            <div className="card-body ">

                <div className="d-flex">
                    <h6 className="flex-grow-1">{city}</h6>
                    <h6>{time = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()}</h6>
                </div>

                <div className="d-flex flex-column text-center ">
                    <h3 className="display-4 mb-0 font-weight-bold"
                        style={{color: '#1C2331', fontSize: '20px'}}> {temirature}°C </h3>
                    <span className="small" style={{color: '#868B94'}}>{state}</span>
                </div>

                <div className="d-flex align-items-center">
                    <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                        <div><i className="fas fa-wind fa-fw" style={{color: '#868B94'}}></i> <span
                            className="ms-1"> {wind} km/h </span></div>
                        <div><i className="fas fa-tint fa-fw" style={{color: '#868B94'}}></i> <span
                            className="ms-1"> {humidity}% </span></div>
                    </div>
                    <div>
                        <img
                            src={image} width="100px"/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default WeatherData;
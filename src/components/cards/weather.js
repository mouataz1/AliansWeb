import React from "react";
import {Link} from 'react-router-dom';

function Weather() {
    return(

                <div className="container p-0">

                    <div className="row d-flex  ">
                        <div className="">

                            <div className="card " style={{color: '#ffff', borderRadius: '5px', heght: '100px', backgroundColor: '#554BC5'}}>
                                <div className="card-body ">

                                    <div className="d-flex">
                                        <h6 className="flex-grow-1">Warsaw</h6>
                                        <h6>15:07</h6>
                                    </div>

                                    <div className="d-flex flex-column text-center ">
                                        <h3 className="display-4 mb-0 font-weight-bold"
                                            style={{color: '#1C2331', fontSize: '20px'}}> 13°C </h3>
                                        <span className="small" style={{color: '#868B94'}}>Stormy</span>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                                            <div><i className="fas fa-wind fa-fw" style={{color: '#868B94'}}></i> <span
                                                className="ms-1"> 40 km/h </span></div>
                                            <div><i className="fas fa-tint fa-fw" style={{color: '#868B94'}}></i> <span
                                                className="ms-1"> 84% </span></div>
                                            <div><i className="fas fa-sun fa-fw" style={{color: '#868B94'}}></i> <span
                                                className="ms-1"> 0.2h </span></div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.png"
                                                width="100px"/>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
    )
}
export default Weather;
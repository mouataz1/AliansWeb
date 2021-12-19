//http://localhost:8055/items/alerts
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import AlertData from "./allertData";





function Allerts() {
    const [alerts, setAlerts] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8055/items/alerts')
            .then(res => {
                setAlerts(res.data);
                console.log(res.data);

            }).catch(error => alert("eroor alert !!"));
    }, [])

    // const handleChange = e =>{
    //     setSearch(e.table.value)
    // }
   // const filterAlerts = alerts.filter(alert => alert.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <div className="container   p-0" >
            {/*<div className="row d-flex justify-content-center align-items-center ">*/}
            {/*    <div className="">*/}

            {/*        <div className="card " style={{color: '#ffff', width: '100%', borderRadius: '5px', backgroundColor: '#554BC5', height: '195px'}}>*/}
            {/*            <div className="card-body ">*/}

            {/*                {filterAlerts.map(alert => {*/}
            {/*                    return (*/}
            {/*                        <AlertData*/}
            {/*                            key={alerts.id}*/}
            {/*                            title={alerts.taskTitle}*/}
            {/*                            desc={alerts.description}*/}

            {/*                        />*/}
            {/*                    )*/}
            {/*                })}*/}



            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Allerts;
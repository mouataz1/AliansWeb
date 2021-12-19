import React from "react";
import {Link} from 'react-router-dom';
import Weather from '../components/cards/weather';
import Currency from '../components/cards/currency';
import Sidebar from '../components/cards/sidebar';

function Studies() {
    return(
        <div className="row bg-black m-0 p-0">
            <Sidebar />
            <div className="col">
                <h1>studies stuf</h1>
            </div>


        </div>
    )
}
export default Studies;
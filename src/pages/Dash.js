import React from "react";
import {Link} from 'react-router-dom';
import Weather from '../components/cards/weather';
import Currency from '../components/cards/currency';
import Sidebar from '../components/cards/sidebar';

function Dash() {
    return(
        <div className="row bg-black m-0 p-0">
            <Sidebar />
            <div className="col">
                <div className="d-flex flex-row-reverse ">
                    <div className="p-2" style={{width: '200px'}}><Weather /></div>
                    <div className="pt-2" style={{width: '100%'}}><Currency /></div>
                </div>
                <div className="music bg-dark" style={{height: '200px'}}>
                    <h1 className="text-center text-white">music goes here</h1>
                </div>
                <div className="allerts bg-warning mt-4" style={{height: '200px'}}>
                    <h1 className="text-center text-white">allerts goes here</h1>
                </div>
            </div>


        </div>
    )
}
export default Dash;
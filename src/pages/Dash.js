import React from "react";
import {Link} from 'react-router-dom';
import Weather from '../components/cards/weather';
import Currency from '../components/cards/currency';
import Sidebar from '../components/cards/sidebar';
import Music from '../components/cards/music';
import Allerts from '../components/cards/allert';


function Dash() {
    return(
        <div className="row bg-black m-0 p-0">
            <Sidebar />
            <div className="col">
                <div className="d-flex flex-row-reverse ">
                    <div className="p-2" style={{width: '200px'}}><Weather /></div>
                    <div className="pt-2" style={{width: '100%'}}><Currency /></div>
                </div>
                <div className="music bg-datk mb-3" style={{height: '250px'}}>
                    <div className="pt-2" style={{width: '100%'}}>
                        <Music />
                    </div>
                </div>
                <div className="allerts bg-warning mt-4" style={{height: '200px'}}>
                    <Allerts/>
                </div>
            </div>


        </div>
    )
}
export default Dash;
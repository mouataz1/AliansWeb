import React from "react";
import {Link} from 'react-router-dom';

function Sidebar() {
    return(
        <div className="col-2 d-flex flex-column flex-shrink-0  bg-dark" style={{width: '280px', height: '100vh'}}>
            <Link to="/dashboard"
                  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">

                <span className="fs-4 text-danger">AliansWeb</span>
            </Link>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">s
                <li>
                    <Link to="/studies" className="nav-link link-light">
                        Studies
                    </Link>
                </li>
                <li>
                    <Link to="/work" className="nav-link link-light">
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="/freelancing" className="nav-link link-light">
                        Freelancing
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/currency" className="nav-link link-light" aria-current="page">
                        Currency
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/fridge" className="nav-link link-light" aria-current="page">
                        Whats on My fridge
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/calendar" className="nav-link link-light" aria-current="page">
                        Calendar
                    </Link>
                </li>

            </ul>
            <hr/>

        </div>
    )
}
export default Sidebar;
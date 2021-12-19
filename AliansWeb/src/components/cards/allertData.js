import React from "react";




const AlertData = ({id, title, desc}) => {
    return(
        <div className="card " style={{color: '#ffff', borderRadius: '5px', heght: '100px', backgroundColor: '#554BC5'}}>
            <div className="card-body ">

                <div className="d-flex">
                    <h6 className="flex-grow-1">{title}</h6>
                </div>

                <div className="d-flex flex-column text-center ">
                    <p>
                        {desc}
                    </p>

                </div>



            </div>
        </div>
    )
}
export default AlertData;
import React from "react";
const Coin = ({name, image, symbol, price, volume}) => {
    return(
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table">
                <tbody>
                <tr>
                    <th scope="row">
                        <img src={image} style={{height: '20px'}} alt="crypto"/>
                    </th>
                    <td>{name}</td>
                    <td>{symbol}</td>
                    <td>${price}</td>
                    <td>${volume.toLocaleString()}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Coin;
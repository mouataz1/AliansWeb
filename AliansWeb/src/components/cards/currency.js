import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import Coin from './Coin';




function Currency() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);

            }).catch(error => alert("eroor curency !!"));
    }, [])

    const handleChange = e =>{
        setSearch(e.table.value)
    }
    const filterCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return(
            <div className="container   p-0" >
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="">

                        <div className="card " style={{color: '#ffff', width: '100%', borderRadius: '5px', backgroundColor: '#554BC5', height: '195px'}}>
                            <div className="card-body ">

                                {filterCoins.map(coin => {
                                    return (
                                        <Coin
                                            key={coin.id}
                                            name={coin.name}
                                            image={coin.image}
                                            symbol={coin.symbol}
                                            volume={coin.market_cap}
                                            price={coin.current_price}
                                        />
                                    )
                                })}



                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Currency;
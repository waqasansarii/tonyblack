import React,  { useEffect, useState } from 'react'
import '../styles/balance.css'
import SubmitButton from '../submitButton'
import Error from '../error/error'
import axios from "axios";

const Balance = () => {

    let [error, setError] = useState(false)
    let [coin,setCoins] = useState('')
    const handleError = () => {
           setError(true)
    }
    useEffect(() => {
        axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false"
        )
        .then((res) => {
            setCoins(res.data[0]);
            console.log("coins", res.data);
            
          })
          .catch((error) => console.log(error));
      }, []);

    return (
        <div className='balance_container'>
            <div className='balance_main_div'>

                {error ?
                    <Error className='start' strong='• Error:'
                        error='• Minimum WEBMONEY - 10$, BTC - paste 10$ send any summ 
                it will add after 3 confirmation. Минималка
                вебмани 10$ для БТК минималки нет вообще.Вводите 10 пополняете на любую сумму USD'
                    />
                    :
                    null
                }

                <p className='dollar_equal'>1$ = {coin.current_price} BTC</p>
                <form className='dollar_form'>
                    <label htmlFor="bin">SUM: </label>
                    <input className='bin_input dlr' type="text" defaultValue='1.00' />
                    <SubmitButton type="button" value="Replenish BTC" onclick={() => handleError()} />
                </form>
                <div className='img_div'>
                    <img src="http://tonyblack.biz/images/ico_btc.png" alt="" />
                </div>
                <div>
                    <p className='dollar_equal'>We also accept:</p>
                </div>
                <div>
                    <img className='wm' src="http://tonyblack.biz/images/ico_wm.png" alt="" />
                    <img className='qixi' src="http://tonyblack.biz/images/ico_qiwi.png" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Balance

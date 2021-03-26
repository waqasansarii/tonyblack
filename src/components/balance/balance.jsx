import React, { useState } from 'react'
import '../styles/balance.css'
import SubmitButton from '../submitButton'
import Error from '../error/error'

const Balance = () => {

    let [error, setError] = useState(false)

    const handleError = () => {
           setError(true)
    }

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

                <p className='dollar_equal'>1$ = 0.000033 BTC</p>
                <form className='dollar_form'>
                    <label htmlFor="bin">SUM: </label>
                    <input className='bin_input dlr' type="text" defaultValue='1.00' />
                    {/* <input className='search_btn' type="button" value="Replenish BTC"/> */}
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

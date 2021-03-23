import React from 'react'
import '../styles/balance.css'

const Balance = () => {
    return (
        <div className='balance_container'>
            <div className='balance_main_div'>
                <p className='dollar_equal'>1$ = 0.000033 BTC</p>
                <form className='dollar_form'>
                <label htmlFor="bin">SUM: </label>
                    <input className='bin_input dlr' type="text" defaultValue='1.00'/>
                    <input className='search_btn' type="button" value="Replenish BTC"/>
                </form>
                <div className='img_div'>
                    <img src="http://tonyblack.biz/images/ico_btc.png" alt=""/>
                </div>
                <div>
                    <p className='dollar_equal'>We also accept:</p>
                </div>
                <div>
                    <img className='wm' src="http://tonyblack.biz/images/ico_wm.png" alt=""/>
                    <img className='qixi' src="http://tonyblack.biz/images/ico_qiwi.png" alt=""/>
                </div>

            </div>
            
        </div>
    )
}

export default Balance

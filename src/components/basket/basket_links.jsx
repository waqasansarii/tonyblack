import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/basket.css'

const Basket_links = ({link}) => {
    return (
        <div className='basket_sublink_contaier'>
            <div className='basket_sublink_main_div'>
               <div className='subLink_div'>
                 <Link to={`${link}`} className='basket_sub_links'>CVV</Link> |
                 <Link to={`${link}/dedserv`} className='basket_sub_links'>VNC/DS</Link> |
                 <Link to={`${link}/dumps`} className='basket_sub_links'>Dumps</Link> |
                 <Link to={`${link}/banks`} className='basket_sub_links'>Banks accounts</Link> |
                 <Link to={`${link}/paypals`} className='basket_sub_links'>Paypals</Link> 
               </div>
            </div>
        </div>
    )
}

export default Basket_links

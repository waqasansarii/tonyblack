import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Subnav_list from './subnav_list'
import '../styles/navbar.css'

export default function Navbar() {
    let [hide, setHide] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, []);

    if (width > 990) {
        hide = true
    }
    const handleOpen = () => {
        setHide(!hide)
    }


    return (
        <div className='navbar_container'>
            <div className='main_navbar_div'>
                <div className='navbar_div'>
                    <Link className='logo_name' to='/home'>tonyblack.biz</Link>
                    {hide ?
                        // <>
                        <ul className={!hide ? 'nav_ul whute' :
                            'nav_ul mob_nav_ul whute'
                            // null
                        }>
                            <li>
                                <Link className='nav_link' to='/cvv'>CVV</Link>
                            </li>
                            <li>
                                <Link className='nav_link' to='/rdp_vnc'>RDP/VNC</Link>
                            </li>
                            <li>
                                <Link className='nav_link' to='/dumps'>DUMPS</Link>
                            </li>
                            <li>
                                <Link className='nav_link' to='/banks'>BANKS</Link>
                            </li>
                            <li>
                                <Link className='nav_link' to='/paypals'>PAYPALS</Link>
                            </li>
                            <li>
                                <Link className='nav_link' to='/basket'>BASKET</Link>
                            </li>
                            <li>
                                <Link className='nav_link' to='/archive'>ARCHIVE</Link>
                            </li>
                            <li>
                                <Link className='nav_link' to='/balance'>BILLING</Link>
                            </li>
                            <li>
                                <Link className='nav_link' to='/finance'>FINANCE</Link>
                            </li>
                            <li>
                                <Link className='nav_link' to='/support'>SUPPORT</Link>
                            </li>
                            <div className='sub_navlist_div'>
                                <Subnav_list className='subnav_mob_list' open={hide} />
                            </div>
                        </ul>
                        // </>
                        : null
                    }
                    <div className='bar_div'>
                        <FaBars className='bar_icon' onClick={handleOpen} />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import {ImMobile,ImUser} from 'react-icons/im'
import {AiFillLock} from 'react-icons/ai'


function Subnav_list({className,open}) {
    return (
        <div>
             <ul className={ !open? 'subnav_ul':className}>
                        <li>
                            <Link className='subnav_link' to='/search_bin'>Search Bins</Link>
                        </li>
                        <li>
                            <Link className='subnav_link' to='/search_dob'>Search DOB/SSN</Link>
                        </li>
                        <li>
                            <Link className='subnav_link' to='/balance'><ImMobile className='nav_icon'/> Balance 0.00 USD</Link>
                        </li>
                        <li>
                            <Link className='subnav_link' to='/change'><AiFillLock className='nav_icon'/> Change <strong style={{marginLeft:'3px',fontWeight:'bold'}}> Password</strong></Link>
                        </li>
                        <li>
                            <Link className='subnav_link' to='/logout'><ImUser className='nav_icon'/> Logout</Link>
                        </li>
                    </ul>
            
        </div>
    )
}

export default Subnav_list

import React from 'react'
import { Link } from 'react-router-dom'
import {ImMobile,ImUser} from 'react-icons/im'
import {AiFillLock} from 'react-icons/ai'


function Subnav_list({className,open}) {
    return (
        <div>
             <ul className={ !open? 'subnav_ul':className}>
                        <li>
                            <Link className='subnav_link' to='/search_bins'> <strong style={{fontWeight:'bold'}}> Search Bins</strong></Link>
                        </li>
                        <li>
                            <Link className='subnav_link' to='/search_dob_ssn'> <strong style={{fontWeight:'bold'}}>Search DOB/SSN</strong></Link>
                        </li>
                        <li>
                            <Link className='subnav_link' to='/balance'><ImMobile className='nav_icon'/><strong style={{marginLeft:'5px',fontWeight:'bold'}}> Balance </strong><p style={{marginLeft:'3px'}}> 0.00 USD</p></Link>
                        </li>
                        <li>
                            <Link className='subnav_link' to='/change_password'><AiFillLock className='nav_icon'/> <p style={{marginLeft:'5px'}}>Change</p> <strong style={{marginLeft:'3px',fontWeight:'bold'}}> Password</strong></Link>
                        </li>
                        <li>
                            <Link className='subnav_link' to='/logout'><ImUser className='nav_icon'/> <p style={{marginLeft:'6px'}}>Logout</p></Link>
                        </li>
                    </ul>
            
        </div>
    )
}

export default Subnav_list

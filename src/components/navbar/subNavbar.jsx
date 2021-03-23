import React from 'react'
import Subnav_list from './subnav_list'

export default function SubNavbar() {
    return (
        <div className='subNavbar_container'>
            <div className='main_subnav_div'>
                <div className='subnav_ul_div'>
                    <p className='username_para'>Hi, <strong className='strong'>UserName</strong></p>
                    <div className='sub_nav_list_div'>
                        <Subnav_list />
                    </div>
                </div>
            </div>

        </div>
    )
}

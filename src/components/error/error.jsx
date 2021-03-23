import React from 'react'
import '../styles/error.css'

const Error = () => {
    return (
        <div className='error_container'>
            <div className='main_error_div'>
                <ul className='error_ul'>
                    <li>No transactions</li>
                </ul>
            </div>
        </div>
    )
}

export default Error

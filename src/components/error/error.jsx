import React from 'react'
import '../styles/error.css'

const Error = ({ error, className, strong }) => {
    return (
        <div className='error_container'>
            <div className='main_error_div'>
                <ul className={`error_ul ${className}`}>
                    <li> <strong style={{}}>{strong ? strong : null}</strong></li>
                    <li>{error}</li>
                </ul>
            </div>
        </div>
    )
}

export default Error

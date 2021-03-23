import React from 'react'
import '../styles/head.css'

function Heading({head}) {
    return (
        <div className='headin_container'>
            <h2 className='heading'>{head}</h2>
        </div>
    )
}

export default Heading

import React from 'react'

const SubmitButton = ({value,type,onclick}) => {
    return (
        <div>
            <input className='search_btn' type={type} value={value} onClick={onclick} />
        </div>
    )
}

export default SubmitButton

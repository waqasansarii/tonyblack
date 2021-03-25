import React from 'react'

const SubmitButton = ({value,type,onclick,className}) => {
    return (
        <div>
            <input  className={`search_btn ${className}`} type={type} value={value} onClick={onclick} />
        </div>
    )
}

export default SubmitButton

import React from 'react'

const SubmitButton = ({value,type,onclick,className,disabled}) => {
    return (
        <div>
            <input disabled={disabled} className={`search_btn ${className}`} type={type} value={value} onClick={onclick} />
        </div>
    )
}

export default SubmitButton

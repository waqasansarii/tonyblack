import React from 'react'
import '../styles/rdp_vnc.css'
import SubmitButton from '../submitButton'


const Rdp_Vnc_Filter = () => {
    return (
        <div className='rdp_container'>
            <div className='main_rdp_div'>
                <form className='rdp_filter_form'>
                    <select name="country" id="country">
                        <option value="country">Country</option>
                    </select>
                    <select name="state" id="state">
                        <option value="state">State</option>
                    </select>
                    <SubmitButton value='Apply filter' type='button' />
                </form>

            </div>

        </div>
    )
}

export default Rdp_Vnc_Filter

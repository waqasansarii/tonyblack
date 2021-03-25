import React from 'react'
import SubmitButton from '../submitButton'
import '../styles/paypal.css'

const Paypal_filter = () => {
    return (
        <div>
            <div className='main_rdp_div'>
                <form className='rdp_filter_form paypal_flex'>
                    <select className='dumps_slct' name="country" id="country">
                        <option value="country">Country</option>
                    </select>
                   <label htmlFor="" className='blnce_label'>Balance min: </label>
                    <input type="text" className='bin_input paypal' />
                    <SubmitButton className='dumps_btn' value='Apply filter' type='button' />
                </form>

            </div>
        </div>
    )
}

export default Paypal_filter

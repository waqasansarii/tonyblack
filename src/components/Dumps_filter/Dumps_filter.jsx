import React from 'react'
import SubmitButton from "../submitButton";
import '../styles/dumps.css'

const Dumps_filter = () => {
    return (
        <div>
            <div className='main_rdp_div'>
                <form className='rdp_filter_form dumps_flex'>
                    <select className='dumps_slct' name="country" id="country">
                        <option value="country">Carrier</option>
                    </select>
                    <select className='dumps_slct' name="country" id="country">
                        <option value="country">Country</option>
                    </select>
                    <select className='dumps_slct' name="state" id="state">
                        <option value="state">Type</option>
                    </select>
                    <select className='dumps_slct' name="state" id="state">
                        <option value="state">Track 1</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <input type="text" className='bin_input dumps' placeholder='Bin' />
                    <SubmitButton className='dumps_btn' value='Apply filter' type='button' />
                </form>

            </div>

        </div>
    )
}

export default Dumps_filter

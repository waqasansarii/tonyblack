import React from 'react'
import SubmitButton from '../submitButton'
import { select_option } from '../../data/cvv_select_data'

const Cvv_filter = () => {


    return (
        <div className='cvv_filter_container'>
            <div className='cvvFilter_main_div'>
                <form className='cvv_form'>
                    <select className='cvv_slt' >
                        <option value="base">Base</option>
                        <option value="Mix_16_3_20">Mix_16_3_20</option>
                    </select>
                    <select className='cvv_slt'>
                        <option value="base">Country</option>
                        {select_option.country.map((val, i) => (
                            <option key={i} value={val}>{val}</option>

                        ))}
                    </select>
                    <select className='cvv_slt'>
                        <option value="base">State</option>
                        {select_option.state.map((val, i) => (
                            <option value={val} key={i}>{val}</option>

                        ))}
                    </select>
                    <select className='cvv_slt'>
                        <option value="base">City</option>
                        {select_option.city.map((val, i) => (

                            <option value={val} key={i}>{val}</option>
                        ))}
                    </select>
                    <select className='cvv_slt'>
                        <option value="base">Type</option>
                        {select_option.type.map((val, i) => (

                            <option value={val} key={i}>{val}</option>
                        ))}
                    </select>
                    <input type="text" className='bin_input dumps' placeholder='Bin1,Bin2' />
                    <input type="text" className='bin_input dumps' placeholder='Zip' />
                    <br className='br'/>
                    <br className='br'/>
                    <select className='cvv_slt'>
                        <option value="base">Bin types</option>
                        <option value="">DEBIT</option>
                        <option value="">CREDIT</option>
                        <option value="">CHARGE</option>
                    </select>
                    <select className='cvv_slt'>
                        <option value="base">Bin levels (Price:0.1$)</option>
                        <option value=""></option>
                    </select>
                    <select className='cvv_slt'>
                        <option value="base">Bin bank (Price:0.3$)</option>
                        <option value=""></option>
                    </select>
                    <br className='br' />
                    <br className='br'/>
                    <SubmitButton type='button' value='Apply' className='filter_btn' />
                </form>
            </div>
        </div>
    )
}

export default Cvv_filter

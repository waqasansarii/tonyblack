import React from 'react'
import SubmitButton from '../submitButton'

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
                       <option value=""></option>
                   </select>
                   <select className='cvv_slt'>
                       <option value="base">State</option>
                       <option value=""></option>
                   </select>
                   <select className='cvv_slt'>
                       <option value="base">City</option>
                       <option value="">Arzier-Le Muids</option>
                   </select>
                   <select className='cvv_slt'>
                       <option value="base">Type</option>
                       <option value=""></option>
                   </select>
                   <input type="text" className='bin_input dumps' placeholder='Bin1,Bin2' />
                   <input type="text" className='bin_input dumps' placeholder='Zip' />
                   <br/>
                   <select className='cvv_slt'>
                       <option value="base">Bin types</option>
                       <option value=""></option>
                   </select>
                   <select className='cvv_slt'>
                       <option value="base">Bin levels (Price:0.1$)</option>
                       <option value=""></option>
                   </select>
                   <select className='cvv_slt'>
                       <option value="base">Bin bank (Price:0.3$)</option>
                       <option value=""></option>
                   </select>
                   <br/>
                   <br/>
                   <SubmitButton  type='button' value='Apply' />
               </form>
            </div>
        </div>
    )
}

export default Cvv_filter

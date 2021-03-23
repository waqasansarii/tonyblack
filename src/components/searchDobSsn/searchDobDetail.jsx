import React from 'react'
import SearchDobForm from './searchDobForm'
import '../styles/searchDob.css'

const SearchDobDetail = () => {
    return (
        <div className='search_dob_container'>
            <div className='search_dob_main_div'>
                <div>
                    <p className='search_dib_para1'>Search takes 0.2-6 hours.</p>
                    <p className='search_dib_para2'>Search cost USA-12$, UK-18$.</p>
                    <p className='search_dib_para1'>If we can't find information the funds will returned to the balance.</p>
                </div>
                <div>
                    <SearchDobForm />
                </div>
            </div>
        </div>
    )
}

export default SearchDobDetail

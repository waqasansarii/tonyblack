import React from 'react'
import '../styles/search_bin.css'
import Table from '../table/table'

function BinSearch() {

    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    return (
        <div className='bin_input_contaier'>
            <div className='main_input_div'>
                <form className='bin_search_form' onSubmit={handleSubmit}>
                    <label htmlFor="bin">Bins : </label>
                    <input className='bin_input' type="text" placeholder='1000000, 1000002, 10000003'/>
                    <input className='search_btn' type="button" value="Search"/>
                </form>
                <Table />
            </div>
        </div>
    )
}

export default BinSearch

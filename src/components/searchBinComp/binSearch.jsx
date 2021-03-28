import React from 'react'
import '../styles/search_bin.css'
import Table from '../table/table'
import { searchBinTableData } from '../../data/tableData'
import SubmitButton from '../submitButton'

function BinSearch() {

    let [show, setShow] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleTableShow = () => {
        setShow(true)
    }

    return (
        <div className='bin_input_contaier'>
            <div className='main_input_div'>
                <form className='bin_search_form' onSubmit={handleSubmit}>
                    <label htmlFor="bin">Bins : </label>
                    <input className='bin_input' type="text" placeholder='1000000, 1000002, 10000003' />
                    <SubmitButton value='Search' type='button' onclick={() => handleTableShow()} />
                </form>
                {show ?
                    <Table head={searchBinTableData} body={searchBinTableData} />
                    :
                    null
                }
            </div>
        </div>
    )
}

export default BinSearch

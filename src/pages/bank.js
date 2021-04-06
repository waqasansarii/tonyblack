import React,{useLayoutEffect} from 'react'
import Error from '../components/error/error'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import Table_two from '../components/table/table_twol'
import {Bank_TableData} from '../data/tableData'
import '../components/styles/bank.css'

const Bank = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <MainNavbarComp />
            <Heading head='Banks accounts' />
            <Table_two head={Bank_TableData} body={Bank_TableData}  />
            <div>
                <div className='row_div'>
                    <p>Row at page: </p>
                    <select >
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                        <option>200</option>
                    </select>
                </div>
            </div>
            {/* <Error  error='•  No Result'/> */}
            <Footer />
        </div>
    )
}

export default Bank

import React,{useLayoutEffect} from 'react'
import Error from '../components/error/error'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import Paypal_filter from '../components/paypal_filter/paypal_filter'
import Table from '../components/table/table'
import {paypal_TableData} from '../data/tableData'

const Paypals = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <div>
           <MainNavbarComp />
           <Heading head='Paypals' />
           <Paypal_filter />
           <Table head={paypal_TableData} body={paypal_TableData} />
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
           <Error error='•  No Result'/>     
           <Footer />
        </div>
    )
}

export default Paypals
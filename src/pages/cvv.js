import React from 'react'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import Cvv_filter from '../components/cvv/cvv_filter'
import Table from '../components/table/table'
import '../components/styles/cvv.css'

const Cvv = () => {
    return (
        <div>
            <MainNavbarComp />
            <Heading head='CVV' />
            <Cvv_filter />
            <Table />
            <div className='rows_containter'>
                <div className='row_div'>
                    <p>Row at page: </p>
                    <select >
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                        <option>200</option>
                    </select>
                    <br />
                </div>
                    <p className='num'>1</p>
            </div>
            <Footer />
        </div>
    )
}

export default Cvv

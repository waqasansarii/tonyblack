import React,{useLayoutEffect} from 'react'
import Error from '../components/error/error'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import Basket_links from '../components/basket/basket_links'
import Table from '../components/table/table'
import { basket_TableData } from '../data/tableData'
import SubmitButton from '../components/submitButton'

const Basket = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <MainNavbarComp />
            <Heading head='Basket' />
            <Basket_links link='/basket' />
            <div className='basket_price_container'>
                <div className='basket_price_div'>
                    <p className='basket_price'>
                        <strong className='basket_strong'>Total price: </strong>
                         10 (+0.3 for checking)
                        <strong className='basket_strong'> USD</strong>
                    </p>
                    <SubmitButton type='button' value='Buy and Check all' />
                </div>
            </div>
            <Table head={basket_TableData} body={basket_TableData}
                button={<SubmitButton type='button' value='Buy' />}
                buyButton={<SubmitButton type='button' value='Buy and check' />}
                Delete={<SubmitButton type='button' value='Delete' className='dlt_btn' />}
            />
            {/* <Error error='•  Basket is empty' /> */}
            <div className='basket_price_container'>
                <div className='basket_price_div'>
                    <p className='basket_price'>
                        <strong className='basket_strong'>Total price: </strong>
                         10 (+0.3 for checking)
                        <strong className='basket_strong'> USD</strong>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Basket

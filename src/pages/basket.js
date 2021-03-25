import React from 'react'
import Error from '../components/error/error'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import Basket_links from '../components/basket/basket_links'

const Basket = () => {
    return (
        <div>
            <MainNavbarComp />
            <Heading head='Basket' />
            <Basket_links link='/basket' />
            <Error error='•  Basket is empty'/>
            <Footer />
        </div>
    )
}

export default Basket

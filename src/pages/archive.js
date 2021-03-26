import React,{useLayoutEffect} from 'react'
import Basket_links from '../components/basket/basket_links'
import Error from '../components/error/error'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'

const Archive = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div>
            <MainNavbarComp />
            <Heading head='Archive' />
            <Basket_links link='/archive' />
            <Error error='•  You have no shopping' />
            <Footer/>
        </div>
    )
}

export default Archive

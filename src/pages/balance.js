import React,{useLayoutEffect} from 'react'
import Balance from '../components/balance/balance'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'

const BalancePage = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <div>
            <MainNavbarComp />
            <Heading  head='Billing'/>
            <Balance />
            <Footer />
        </div>
    )
}

export default BalancePage

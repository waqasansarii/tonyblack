import React from 'react'
import Balance from '../components/balance/balance'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'

const BalancePage = () => {
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

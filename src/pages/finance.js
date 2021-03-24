import React from 'react'
import Error from '../components/error/error'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'

const Finance = () => {
    return (
        <div>
            <MainNavbarComp />
            <Heading head='Finance'/>
            <Error  error='•  No transactions'/>
            <Footer />
        </div>
    )
}

export default Finance

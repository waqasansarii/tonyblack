import React,{useLayoutEffect} from 'react'
import Error from '../components/error/error'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'

const Finance = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


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

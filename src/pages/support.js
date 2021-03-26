import React,{useLayoutEffect} from 'react'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import SupportForm from '../components/supportForm/supportForm'

const Support = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <div>
            <MainNavbarComp />
            <Heading head='Support'/>
            <SupportForm />
            <Footer />
            
        </div>
    )
}

export default Support

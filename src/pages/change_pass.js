import React,{useLayoutEffect} from 'react'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import ChangePassForm from '../components/changePass/changePassForm'

const Change_pass_page = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <div>
            <MainNavbarComp />
            <Heading head='Change Password'/>
            <ChangePassForm />
            <Footer />
        </div>
    )
}

export default Change_pass_page

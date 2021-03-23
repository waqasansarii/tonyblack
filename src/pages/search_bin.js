import React from 'react'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import BinSearch from '../components/searchBinComp/binSearch'

function Search_bin() {
    return (
        <div>
            <MainNavbarComp />
            <Heading head='Search Bins'/>
            <BinSearch />
            <Footer />
        </div>
    )
}

export default Search_bin

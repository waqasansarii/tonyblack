import React,{useLayoutEffect} from 'react'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import SearchDobDetail from '../components/searchDobSsn/searchDobDetail'



const Search_DOB_SSN = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });


  return (
    <div>
      <MainNavbarComp />
      <Heading head='Search DOB/SSN' />
      <SearchDobDetail />
      <Footer />
    </div>
  )
}

export default Search_DOB_SSN
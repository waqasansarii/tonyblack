import React,{useLayoutEffect} from 'react'
import MainNavbarComp from '../components/navbar'
import News from '../components/news/News'
import Footer from '../components/footer/footer'
export default function Home() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <div>
            <MainNavbarComp />
            <News />
            <Footer />
        </div>
    )
}

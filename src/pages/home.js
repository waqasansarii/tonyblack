import React from 'react'
import MainNavbarComp from '../components/navbar'
import News from '../components/news/News'
import Footer from '../components/footer/footer'
export default function Home() {
    return (
        <div>
            <MainNavbarComp />
            <News />
            <Footer />
        </div>
    )
}

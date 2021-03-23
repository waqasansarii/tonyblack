import React from 'react'
import { useParams } from 'react-router-dom'
import '../components/styles/news.css'
import { NewsData } from '../components/news/news_data'
import MainNavbarComp from '../components/navbar'


function FilterNews() {

    const { id } = useParams()
    let filterData = NewsData.filter((val) => val.id === id)

    const { date, strong } = filterData[0]
    // console.log(id)

    return (
        <div>
          <MainNavbarComp />
            <div className='news_container'>
                <div className='main_news_div'>
                    <h3 className='news_head'>News</h3>
                    <div className='news_div' >
                        <p className='news_para'>
                            <strong style={{ fontWeight: 'bold' }}> {strong}</strong>
                            {date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterNews
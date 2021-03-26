import React,{useLayoutEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../components/styles/news.css'
import { NewsData } from '../components/news/news_data'
import MainNavbarComp from '../components/navbar'
import Footer from '../components/footer/footer'


function FilterNews() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const { id } = useParams()
    let filterData = NewsData.filter((val) => val.id === id)

    // const { date, strong } = filterData[0]
    // console.log(id)

    return (
        <div>
          <MainNavbarComp />
            <div className='news_container'>
                <div className='main_news_div'>
                    <h3 className='news_head'>News</h3>
                    {filterData.map((val)=>(

                    <div className='news_div' >
                        <p className='news_para'>
                            <strong style={{ fontWeight: 'bold' }}> {val.strong}</strong>
                            {val.date}
                        </p>
                     <p className='extra_para'>{val.para}</p>
                    <p className='extra_para'>{val.para2}</p>

                    </div>
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FilterNews
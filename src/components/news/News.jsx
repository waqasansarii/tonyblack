import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../styles/news.css'
import { NewsData } from './news_data'


export default function News() {
    return (
        <div className='news_container'>
            <div className='main_news_div'>
                <h3 className='news_head'>News</h3>
                {NewsData.map((value)=>(
                     <div key={value.id}>
                    <div className='news_div' >
                    <p className='news_para'>
                        <strong style={{ fontWeight: 'bold' }}> {value.strong}</strong>
                         {value.date}
                    </p>
                    <p className='extra_para'>{value.para && value.para}</p>
                    <p className='extra_para'>{value.para2}</p>
                </div>
                <div className='more_div'>
                    <Link className='more' to={`/news/${value.id}`}><span> More </span><BsArrowRight className='more_icon' /></Link>
                </div>
                </div>
                    ))}
            </div>
        </div>
    )
}

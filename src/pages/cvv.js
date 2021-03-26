import React, { useState, useEffect,useLayoutEffect } from 'react'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import Cvv_filter from '../components/cvv/cvv_filter'
import Table from '../components/table/table'
import { cvv_TableData } from '../data/tableData'
import SubmitButton from '../components/submitButton'
import Error from '../components/error/error'
import '../components/styles/cvv.css'

const Cvv = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    let [add, setAdd] = useState(false)
    let [dis, setDis] = useState(false)
    let [value, setValue] = useState('In Basket')

    const handleAdd = (e) => {
        console.log(e.target.value)
        setValue('Wait...')
        setDis(true)
        setTimeout(() => {
            setAdd(true)
            setValue('Added')
        }, 1000)
    }
    useEffect(() => {
        setTimeout(() => {
            if (add) {
                setAdd(false)
            }
        }, 1500)
    }, [add])

    return (
        <div>
            <MainNavbarComp />
            <Heading head='CVV' />
            <Cvv_filter />
            {add ?
                <Error error='• Item Added to Basket' className='added' />
                :
                null
            }
            <Table head={cvv_TableData} body={cvv_TableData}

                button={<SubmitButton type='button'
                    className={value === 'In Basket' ? null : 'white'}
                    value={value} onclick={(e) => handleAdd(e)}
                    disabled={dis}
                />
                }

            />
            <div className='rows_containter'>
                <div className='row_div'>
                    <p>Row at page: </p>
                    <select >
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                        <option>200</option>
                    </select>
                    <br />
                </div>
                <p className='num'>1</p>
            </div>
            <Footer />
        </div>
    )
}

export default Cvv

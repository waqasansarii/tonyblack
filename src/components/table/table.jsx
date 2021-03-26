import React from 'react'
import '../styles/table.css'


const Table = ({ head, body, button, buyButton, Delete }) => {
    // console.log(data)

    return (
        <div className='table_container'>
            <div className='main_table_div'>
                <table className="list1 acenter">
                    <thead>
                        <tr>
                            {head.head && head.head.map((val, i) => (
                                <td key={i}>{val}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {body.body && body.body.map((val, i) => (
                            <tr key={i}>

                                <td  >{val.bin ? val.bin : null}</td>
                                <td  >{val.exp}</td>
                                <td >{val.name}</td>
                                <td >{val.tick}</td>
                                <td >{val.country}</td>
                                <td >{val.type}</td>
                                <td >{val.state}</td>
                                <td >{val.city}</td>
                                <td >{val.zip}</td>
                                <td >{val.ssn}</td>
                                <td >{val.dob}</td>
                                <td >{val.base}</td>
                                <td >{val.cost}</td>
                                <td >{button ? button : null}</td>
                                <td >{buyButton ? (buyButton) : null}{Delete ? Delete : null}</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table

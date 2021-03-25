import React from 'react'
import '../styles/table.css'
import { data } from '../../data/tableData'


const Table = ({ head, body }) => {
    console.log(data)

    return (
        <div className='table_container'>
            <div className='main_table_div'>
                <table className="list1 acenter">
                    <thead>
                        <tr>
                            {data.head && data.head.map((val, i) => (
                                <td key={i}>{val}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.body && data.body.map((val) => (
                            <tr>
                                <>
                                    <td>{val.name}</td>
                                    <td>{val.name}</td>
                                    <td>{val.name}</td>
                                    <td>{val.name}</td>
                                    <td>{val.name}</td>
                                    <td>{val.name}</td>
                                </>
                            </tr>
                        ))

                        }
                        {/* {body.body && body.body.map((val, i) => (
                                <td key={i}>{val}</td>
                            ))} */}


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table

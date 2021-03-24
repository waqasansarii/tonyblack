import React from 'react'
import '../styles/table.css'


const Table = ({ head, body }) => {
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
                        <tr>
                            {body.body && body.body.map((val, i) => (
                                <td key={i}>{val}</td>
                            ))}

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table

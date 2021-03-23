import React from 'react'
import '../styles/table.css'

const Table = () => {
    return (
        <div className='table_container'>
            <div className='main_table_div'>
                <table className="list1 acenter">
                    <thead>
                        <tr>
                            <td>Bin</td>
                            <td>Country</td>
                            <td>Vendor</td>
                            <td>Type</td>
                            <td>Lavel</td>
                            <td>Bank</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table

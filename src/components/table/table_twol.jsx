import React from 'react'
import '../styles/table.css'


const Table_two = ({ head, body }) => {
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
                                <td >{val.country ? val.country : val.bin}</td>
                                <td >{val.state ? val.state : val.exp ? val.exp : val.bank}</td>
                                <td>{val.ip ? val.ip : val.carrier ? val.carrier : val.balance?val.balance:val.vendor}</td>
                                <td>{val.price ? val.price : val.type ? val.type :val.cradit }</td>
                                {val.country_dump || val.mortrage || val.cc ||val.lavel?
                                    <>
                                        <td>{val.country_dump ? val.country_dump : val.mortrage ? val.mortrage : val.bank ? val.bank : val.lavel}</td>
                                        <td>{val.track ? val.track : val.Rewards ? val.Rewards : val.cc ? val.cc : val.bank}</td>
                                        {val.cost || val.bank_c?
                                        <td>{val.cost ? val.cost : val.bank_c ? val.bank_c : null}</td>
                                        : null
                                        }
                                        {val.cost_paypal ?
                                            <>
                                                <td>{val.verif ? val.verif : null}</td>
                                                <td>{val.cost_paypal ? val.cost_paypal : null}</td>
                                            </>
                                            : null
                                        }
                                    </>
                                    : null
                                }
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table_two

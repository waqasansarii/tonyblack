import React from 'react'
import '../styles/searchDob.css'


const SearchDobForm = () => {
    return (
        <div className='search_dob_form_container'>
            <div className='search_dob_form_main_div'>
                <form className='search_dob_form'>
                    <table className='search_dob_table'>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="bin">First Name </label>
                                </td>
                                <td>

                                    <input className='bin_input' type="text" />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="bin">Last Name </label>
                                </td>
                                <td>
                                    <input className='bin_input' type="text" />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="bin">Country </label>
                                </td>
                                <td>
                                    <select className='select_dob_form' name="country" id="country">
                                        <option value="usa">USA</option>
                                        <option value="uk">UK</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="bin">City </label>
                                </td>
                                <td>
                                    <input className='bin_input' type="text" />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="bin">State </label>
                                </td>
                                <td>
                                    <input className='bin_input' type="text" />
                                </td>
                                <td></td>

                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="bin">Address </label>
                                </td>
                                <td>

                                    <input className='bin_input' type="text" />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="bin">ZIP </label>
                                </td>
                                <td>
                                    <input className='bin_input' type="text" />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="bin">Capcha </label>
                                </td>
                                <td>
                                    <input className='bin_input captcha_input' type="text" />
                                </td>
                                <td>- code from the image</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td className='dob_send_btn'>
                                    {/* <input name="sub" type="submit" value=" Send " /> */}
                                    <input className='search_btn dob_btn' type="button" value="sent" />

                                </td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </div>
        </div>
    )
}

export default SearchDobForm

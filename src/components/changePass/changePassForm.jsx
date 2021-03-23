import React from 'react'
import '../styles/change.css'

const ChangePassForm = () => {
    return (
        <div className='change_pass_conatainer'>
            <div className='change_pass_main_div'>
                <form className='change_pass_form'>
                    <table className='search_dob_table change_table'>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="bin">Old Password </label>
                                </td>
                                <td>

                                    <input className='bin_input change' type="password" />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="bin">New Password </label>
                                </td>
                                <td>
                                    <input className='bin_input change' type="password" />
                                </td>
                                <td>- mminimum of 6 characters</td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="bin">Password again </label>
                                </td>
                                <td>
                                    <input className='bin_input change' type="password" />
                                </td>
                                <td>- enter the new password again</td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td className='dob_send_btn'>
                                    {/* <input name="sub" type="submit" value=" Send " /> */}
                                    <input className='search_btn dob_btn' type="button" value="Change" />

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

export default ChangePassForm

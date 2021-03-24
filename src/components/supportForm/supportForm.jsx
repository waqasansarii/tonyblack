import React from 'react'
import SubmitButton from '../submitButton'
import '../styles/support.css'

const SupportForm = () => {
    return (
        <div className='support_container'>
            <div className="support_main_div">
                <form className="support_form">
                    <table class="table2">
                        <tr>
                            <td className='textArea'>Text</td>
                            <td>
                                <textarea rows="7" name="text"></textarea>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Capcha</td>
                            <td>
                                {/* <input name="capcha" type="text" maxlength="5" 
                    style="background:url(/capcha/index.php?123) right no-repeat #fff;" /> */}
                                <input name="capcha" type="text" maxlength="5" 
                                placeholder="Code from the image" className='supprt_inp captcha_input' />

                            </td>
                            <td> - code from the image</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td className='sent_btn_td'>
                                {/* <input name="sub" type="submit" value=" Send " /> */}
                                <SubmitButton type="submit" value=" Send " />
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default SupportForm

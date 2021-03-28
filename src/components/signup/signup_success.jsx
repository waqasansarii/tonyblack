import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup_Success() {
    return (
        <div className='login_container'>
            <div className='form_main_div'>
                <div id="login-form">
                    <h1>Register</h1>
                    <fieldset>
                        <ul className="error">
                            <li>Registration is successful</li>
                        </ul>
                        <Link to="/">
                            <input name="sub" type="submit" value="Login" />
                        </Link>
                    </fieldset>
                    <div className='bottom_tag' >
                        <p style={{ fontSize: '14px' }}>Сдается место для рекламы</p>
                    </div>

                </div>
            </div>
        </div>
    )

}

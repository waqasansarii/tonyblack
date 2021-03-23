import React from 'react'
import '../styles/login_signup.css'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const Signup=()=> {

    // let history = useHistory();

    const handleSubmit = (e)=>{
       e.preventDefault();
    //    history.push('/register_success')
    }

    return (

        <div className='login_container'>
            <div className='form_main_div'>
                <div id="login-form">
                    <h1>REGISTER</h1>
                    <fieldset>
                        <ul className="error">
                            <li>Image code is entered incorrectly.</li>
                        </ul>
                        <form onSubmit={handleSubmit} >
                            <div>
                                <input name="login" type="text" maxlength="18" placeholder="Login" value="" />
                                <input name="pass" type="password" placeholder="Password" />
                                <input name="pass2" type="password" placeholder="Password (confirm)" />
                                <input name="email" type="text" maxlength="50" placeholder="E-Mail" value="" />
                                <input name="capcha" type="text" maxlength="5" placeholder="Code from the image" className='captcha_input' />
                            </div>
                           <Link to='/register_success'>
                            <input name="sub" type="submit"  value="Register" />
                           </Link>
                            <footer className="clearfix">
                                <p>
                                    <span className="info">&raquo;</span>
                                    <Link to='/'>Login</Link>
                                </p>
                            </footer>
                        </form>
                    </fieldset>
                    <div className='bottom_tag' >
                        <p style={{ fontSize: '14px' }}>Сдается место для рекламы</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

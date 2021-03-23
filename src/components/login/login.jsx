import React from 'react'
import '../styles/login_signup.css'
import { Link,useHistory } from 'react-router-dom'


const  Login=() =>{


    // const history = useHistory()
    const handleSubmit = (e)=>{
        e.preventDefault();
        // history.push('/register_success')
     }
    return (

        <div className='login_container'>
            <div className='form_main_div'>
                <div id="login-form">
                    <h1>Login</h1>
                    <fieldset>
                        <ul className="error">
                            <li> Image code is entered incorrectly.</li>
                        </ul>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input name="login" type="text" maxlength="18" placeholder="Login" value="" />
                                <input name="pass" type="password" placeholder="Password" />
                                <input name="capcha" type="text" maxlength="5" placeholder="Code from the image" className='captcha_input' />
                            </div>
                          <Link to='/home'>
                            <input name="sub" type="submit" value="Login" />
                          </Link>
                            <footer className="clearfix">
                                <p>
                                    <span className="info">&raquo;</span>
                                    <Link to='/signup'>Register</Link>
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

export default Login

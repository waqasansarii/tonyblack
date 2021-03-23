import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='container'>
            <div className='footer_container'>
                <div className='main_footer_div'>
                    <div className="siteFooter">
                        <div className="flex">
                            <div className="tiny">
                                <h5 className='footer_head'>Main <span>Navigation</span></h5>
                                <ul className="columnNavigation">
                                    <li>
                                        <Link className='footer_link' to="/user/replenish"><strong style={{ fontWeight: 'bold' }}> Billing</strong></Link>
                                    </li>
                                    <li>
                                        <Link className='footer_link' to="/finance"><strong style={{ fontWeight: 'bold' }}>Finance</strong></Link>
                                    </li>
                                    <li>
                                        <Link className='footer_link' to="/info/rules"><strong style={{ fontWeight: 'bold' }}>Rules</strong></Link>
                                    </li>
                                    <li>
                                        <Link className='footer_link' to="/support"><strong style={{ fontWeight: 'bold' }}>Support</strong></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='tiny'>
                                <div>

                                    <h5 className='footer_head'>CVV</h5>
                                    <ul className="columnNavigation">
                                        <li>
                                            <Link className='footer_link' to="/cvv">CVV <strong style={{ fontWeight: 'bold' }}>shop</strong></Link>
                                        </li>
                                        <li>
                                            <Link className='footer_link' to="/basket">CVV <strong style={{ fontWeight: 'bold' }}>basket</strong></Link>
                                        </li>
                                        <li>
                                            <Link className='footer_link' to="/archive">CVV <strong style={{ fontWeight: 'bold' }}>archive</strong></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="fle">
                                <div>

                                    <h5 className='footer_head'>VNC/DS</h5>
                                    <ul className="columnNavigation">
                                        <li>
                                            <Link className='footer_link' to="/dedserv">VNC/DS <strong style={{ fontWeight: 'bold' }}>shop</strong></Link>
                                        </li>
                                        <li>
                                            <Link className='footer_link' to="/basket/dedserv">VNC/DS <strong style={{ fontWeight: 'bold' }}>basket</strong></Link>
                                        </li>
                                        <li>
                                            <Link className='footer_link' to="/archive/dedserv">VNC/DS <strong style={{ fontWeight: 'bold' }}>archive</strong></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="fle">
                                <div>

                                    <h5 className='footer_head'>Dumps</h5>
                                    <ul className="columnNavigation">
                                        <li>
                                            <Link className='footer_link' to="/dumps">Dumps <strong style={{ fontWeight: 'bold' }}>shop</strong></Link>
                                        </li>
                                        <li>
                                            <Link className='footer_link' to="/basket/dumps">Dumps <strong style={{ fontWeight: 'bold' }}>basket</strong></Link>
                                        </li>
                                        <li>
                                            <Link className='footer_link' to="/archive/dumps">Dumps <strong style={{ fontWeight: 'bold' }}>archive</strong></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="siteFooterBar">
                        <div className="center">
                            <div className='copyRight'>
                                <img src="http://tonyblack.biz/images/logos/siteFooterBarLogo.png" alt="" />
                                <p> Jabber: sell-cc@jabber.no or sell-cc@exploit.im ICQ:727273264 <br />2010-2018 &copy; Sell cc. All rights reserved.</p>
                            </div>
                            <a className="backToTop" href="#">Back to Top
                            <img src="http://tonyblack.biz/images/icons/iconSmallTop.png" alt="" />
                            </a>
                        </div>
                    </div>
            </div>

        </div>
        // </div>
    )
}

export default Footer

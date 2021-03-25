import React from 'react'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import '../components/styles/rules.css'

const Rules = () => {
    return (
        <div>
            <MainNavbarComp />
            <Heading head='Проверка' />
            <Heading head='Rules!' />
            <div className='rules_conatiner'>
                <div>
                    <div className='rules_main_div'>
                        <h4 className='subHead1'>Service made for:</h4>
                        <p className='para_rule'>1.1) Online buying CC and CC+CVV
                        via Online Web Interface with instant checking function for cards bought on site
                        </p>
                        <p className='para_rule'>
                            1.2) Online search CC for Contry, State, City, Type and BIN
                        </p>
                        <p className='para_rule'>
                            1.3) Online automatic accept BTC or manually WM, Qiwi(Mesage to Support,ICQ or Jabber)
                        </p>
                        <p className='para_rule'>
                            1.4) Online buying Dedicated Servers
                        </p>
                    </div>
                    <div className='rules_main_div'>
                        <h4>2) Basic rules.</h4>
                        <p className='para_rule'>
                            2.1) All calculations on the site and its services - automatic
                        </p>
                        <p className='para_rule'>
                            2.2) The minimum amount of $ 10 on the site
                        </p>
                        <p className='para_rule'>
                            2.3) Refunds for unused credits - NOT POSSIBLE.To avoid conflicts,
                            the request to pay in advance to see the information you need.
                        </p>
                        <p className='para_rule'>
                            2.4) All information on this site is provided for educational purposes only.
                        </p>
                    </div>
                    <div className='rules_main_div'>
                        <h4>
                            3) Rules of service ONLINE sale CC.
                        </h4>
                        <p className='para_rule'>
                            3.1) Loan repayments for purchased CC, which have been tested before purchase,
                            and have the status VALID - NOT POSSIBLE.
                        </p>
                        <p className='para_rule'>
                            3.2) Loan repayments for purchased CC , have not been tested before purchase is possible in the next 2 hours.
                        </p>
                        <p className='para_rule'>
                            3.3) Is not checked for valid CC , loans are not removed, removed credit cards only for checking if CC Approved.
                        </p>
                        <p className='para_rule'>
                            3.4) Checking the validity of the СС costs 30 cents.
                        </p>
                        <p className='para_rule'>
                            3.5) Loan repayments for the purchased Ded.Serv. possible within 20 minutes.
                        </p>
                        <p className='para_rule'>
                            3.6) We do not guarantee limits and amounts on CC.
                        </p>
                        <p className='para_rule'>
                            3.7) Before you start to use the site to purchase information and other
                            services you have read on the website and take the user agreement.
                        </p>
                        <p className='para_rule'>
                            3.8) We didnt checked card to VBV,so we can not guarantee that there is no protection VBV on the CC.
                        </p>
                    </div>
                    <div className='last'>
                        <h4>For the use of hacks - BAN</h4>
                        <h4>
                            In case of problems with enrollment, please contact our support.
                        </h4>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Rules

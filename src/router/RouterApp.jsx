import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from '../components/login/login';
// import Navbar from '../components/navbar/navbar';
import Signup from '../components/signup/signup';
import Signup_Success from '../components/signup/signup_success';
import Home from '../pages/home'
import FilterNews from '../pages/filter_news'
import Search_bin from '../pages/search_bin'
import Search_DOB_SSN from '../pages/search_dob_ssn'
import BalancePage from '../pages/balance'
import Change_pass_page from '../pages/change_pass'
import Finance from '../pages/finance'
import Rdp_Vnc from '../pages/Rdp_Vnc'
import Support from '../pages/support'
import Bank from '../pages/bank'
import Dumps from '../pages/dumps'
import Paypals from '../pages/paypals'
import Cvv from '../pages/cvv'
import Basket from '../pages/basket'
import Rules from '../pages/rules'
import Archive from '../pages/archive'

const RouterApp = ()=> {
   
    return(
        <Router >
            {/* <Navbar /> */}
            <Switch>
                <Route exact path='/' component={Login} />
                <Route  path='/register_success'  component={Signup_Success}/>
                <Route path='/signup' component={Signup} />
                <Route path='/home' component={Home} />
                <Route path='/news/:id'  component={FilterNews}/>
                <Route path='/search_bins' component={Search_bin} />
                <Route path='/search_dob_ssn' component={Search_DOB_SSN} />
                <Route path='/balance' component={BalancePage} />
                <Route path='/change_password' component={Change_pass_page} />
                <Route  path='/finance' component={Finance}/>
                <Route  path='/rdp_vnc' component={Rdp_Vnc}/>
                <Route path='/support' component={Support} />
                <Route path='/banks' component={Bank} />
                <Route path='/dumps' component={Dumps} />
                <Route path='/paypals' component={Paypals} />
                <Route path='/cvv' component={Cvv} />
                <Route path='/basket' component={Basket} />
                <Route path='/rules' component={Rules} />
                <Route path='/archive' component={Archive} />
            </Switch>
        </Router>
    )
}

export default RouterApp
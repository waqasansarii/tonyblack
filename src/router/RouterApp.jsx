import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from '../components/login/login';
// import Navbar from '../components/navbar/navbar';
import Signup from '../components/signup/signup';
import Signup_Success from '../components/signup/signup_success';
import Home from '../pages/home'
import FilterNews from '../pages/filter_news'

const RouterApp = ()=> {
    return(
        <Router >
            {/* <Navbar /> */}
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/register_success'  component={Signup_Success}/>
                <Route path='/signup' component={Signup} />
                <Route path='/home' component={Home} />
                <Route path='/news/:id'  component={FilterNews}/>
            </Switch>
        </Router>
    )
}

export default RouterApp
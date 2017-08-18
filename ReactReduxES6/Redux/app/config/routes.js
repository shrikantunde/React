import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';
import Robot from '../components/Robot/robotPage';
import Shipping from '../components/Shipping/shippingPage';
import Customer from '../components/Customer/customerPage';
import Login from '../components/Session/loginPage';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>           
        <Route path="/" component={Main}>
            <Route path="login" component={Login}> </Route>
            <Route path="robot" component={Robot}> </Route>
            <Route path="shipping" component={Shipping}> </Route>
            <Route path="customer" component={Customer}> </Route>
        </Route>
    </Router>

);

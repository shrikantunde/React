import * as React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Product from './../components/product/ProductList';
import Customer from './../components/customer/Customer';


import Home from './../components/Home';
import Login from './../components/session/Login';
import Private from './../components/Private';
import Form from './../components/commonUI/FormComponenet';
import LoginForm from './../components/Login/LoginParent';
import NotPageFound from './NotFound';

export default class RoutingPath extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/> 
                <Route exact path="/login" component={Login}/> 
                <Route exact path="/private" component={Private}/>
                <Route exact path="/form" component={Form}/> 
                <Route exact path="/customer" component={Customer}/>
                <Route exact path="/loginform" component={LoginForm}/> 
                {/*<Route component={NotPageFound}/>*/}
            </div>
        );
    }
}
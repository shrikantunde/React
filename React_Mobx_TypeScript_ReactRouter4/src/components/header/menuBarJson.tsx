import Form from './../commonUI/FormComponenet';
import Home from './../Home';
import Login from './../session/Login';
import Product from './../product/ProductList';
import Customer from './../customer/Customer';
import LoginForm from './../Login/LoginParent';

import { Route, Redirect, Link } from 'react-router-dom';
import * as AppRoutes from './../../common/config/routingPath';


export const Menu_BAR_JSON=[
                {   path: AppRoutes.ROUTING_PATH.Home,
                    component: Home,
                    name:'Home',
                    subMenu:[
                        {
                            path: '/home/form',
                            component: Form,
                            name:'SubMenu1'
                        }
                    ]
                },                          
                { path: AppRoutes.ROUTING_PATH.FORM,
                    component: Form,
                    name:'Form',
                    subMenu:[]
                },
                { path: AppRoutes.ROUTING_PATH.PRODUCT,
                    component: Product,
                    name:'Product',
                    subMenu:[]
                },
                { path: AppRoutes.ROUTING_PATH.CUSTOMER,
                    component: Customer,
                    name:'Customer',
                    subMenu:[]
                },
                { path: AppRoutes.ROUTING_PATH.LOGINFORM,
                    component: LoginForm,
                    name:'Login',
                    subMenu:[]
                }
            ]
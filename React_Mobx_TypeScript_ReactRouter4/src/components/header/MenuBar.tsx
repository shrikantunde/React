import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Redirect, Link } from 'react-router-dom';
import * as AppRoutes from './../../common/config/routingPath';

import AppState from '../../stores/AppState';
import Form from './../commonUI/FormComponenet';
//import * as MenuBarJSON from './../../components/header/menuBarJson';

@inject('store') @observer
export default class MenuBar extends React.Component<{ store?: AppState }, any> {
    store: AppState;

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    navigateToHome() {
        alert("home render");
    }

    render() {
        const { menuItems,authenticated, authenticating } = this.store;

        console.log(">>>>>>>>");
        console.log(menuItems);

        return (
            <div className="navigator layer-middle" id="navigator">
                <nav className="lower-nav">
                    <ul className="nav nav-pills">
                        <MenuItems menuBarJson={menuItems}/>
                        {authenticated && <Link to='/private'>Private</Link>}
                    </ul>
                </nav>
            </div>
        );
    }
}


const MenuItems = (props) => {

    console.log(props.menuBarJson);

    return (
        <div>
            <ul className="nav nav-pills">
                {
                    props.menuBarJson.Menu_BAR_JSON.map((menu, index) =>
                        <li key={index} className="dropdown">
                            <Link to={menu.path}>{menu.name}</Link>
                            {
                            menu.subMenu.length>0 ?
                                (<ul className="dropdown-menu">
                                    <SubMenu subMenuItems={menu.subMenu}/>
                                </ul> ): null 
                            }
                         </li>
                    )}
            </ul>
        </div>
    );
}

const SubMenu=(props)=>{
    let subMenuItems=props.subMenuItems;
    return(
        <li className="submenu"> <a href="">hi</a></li>
    )
}
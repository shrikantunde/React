import * as React from 'react';
import './../../styles/header/header.css';
import { inject, observer } from 'mobx-react';
import Button from './../commonUI/Button';
import MenuBar from './../header/MenuBar';
import Roles from './../roles/Roles';

import AppState from './../../stores/AppState';


@inject('store') @observer
export default class TopBar extends React.Component<{ store?: AppState }, any> {
    store: AppState;

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    authenticate(e) {
        if (e) e.preventDefault();
        console.log('CLICKED BUTTON');
        this.store.authenticate();
    }

    render() {
        const { authenticated } = this.store;
        return (
            <div className='topbar'>
                <div>
                    <Button onClick={this.authenticate.bind(this)} title={authenticated ? 'Log out' : 'Sign in'} />
                    <div className="logoDemo"></div>
                    <Roles/>
                 </div>
                 <MenuBar/>
            </div>
        );
    }

}
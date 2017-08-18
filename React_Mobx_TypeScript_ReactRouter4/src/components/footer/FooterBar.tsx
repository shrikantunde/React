import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Link } from 'react-router-dom';


import AppState from '../../stores/AppState';

@inject('store') @observer
export default class FooterBar extends React.Component<{ store?: AppState }, any> {
    store: AppState;

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
//   const { menuItems } = this.store;

        return (
                <div className="main-footer" id="footer">1.0.0.5798</div>
        );
    }
}
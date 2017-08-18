import * as React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import MenuBar from './../header/MenuBar';
import RoutingPath  from './../RouterPath';
import TopBar from './../header/TopBar';

import AppState from './../../stores/AppState';

@observer
export default class Layout extends React.Component<{ store: AppState }, any> {
    store: AppState;

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    componentDidMount() {

    }


    render() {
        
       // const { authenticated, authenticating } = this.store;

        return (
            <Router>
                <Provider store={this.store}>    
                    <div>
                        <TopBar/>
                        <div id='container' className="container">
                            <RoutingPath/>
                        </div>
                    </div>
                </Provider>
            </Router>
        );
    }
}
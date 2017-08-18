import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';
import {loadRobot} from './actions/robotActions';


import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css'

const store = configureStore();
store.dispatch(loadRobot());


ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);

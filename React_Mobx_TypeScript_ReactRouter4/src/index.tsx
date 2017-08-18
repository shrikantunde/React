//import './styles/base/menu.css';
//import './styles/base/common.css';
//import './styles/base/main.css';
//import './styles/base/styles.css';
//import './styles/product/product.css';
//import './styles/modal/Modal.css';
import './styles/admin/main.css';


import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Layout from './components/layout/Layout';
import Admin from './components/admin/Admin';
import AppState from './stores/AppState';

const appState = new AppState();

const container = document.getElementById('root');

const renderApp = (Layout) =>
    render(
        <AppContainer>
            <Layout store={appState} />
        </AppContainer>,
        container
    );

renderApp(Layout);
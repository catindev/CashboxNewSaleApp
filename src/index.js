import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux'
import setupStore from './Store/index'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ReadCookieByName from './Utils/ReadCookieByName';

const root = document.getElementById('NewSaleApp');

const store = setupStore({
    Token: ReadCookieByName('tokken') || false,
    IdKkm: root.dataset.idKkm || false,
    Errors: {},

    Sections: [],
    PositionForm: {
        "Name": "",
        "Price": 0,
        "Markup": 0,
        "Discount": 0,
        "Qty": 1,
        "Section": 0
    },

    Domains: [],

    Positions: []
});

render(
    store.getState().Token ?
        (<Provider store={store}>
            <App />
        </Provider>) : (<h1>401:Unauthorized</h1>)
    , root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

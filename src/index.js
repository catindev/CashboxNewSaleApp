import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import setupStore from './Store/index'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = setupStore({
    Token: 'FakeBearerTokenString',
    Sections: [],
    PositionForm: {
        "Name": "123",
        "Price": 0,
        "Markup": 0,
        "Discount": 0,
        "Qty": 1,
        "Section": 0
    },
    Positions: []
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('NewSaleApp'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

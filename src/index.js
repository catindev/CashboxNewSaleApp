import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux'
import setupStore from './Store/';
import initialState from './Store/initial';
import ReadCookieByName from './Utils/ReadCookieByName';

import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('NewSaleApp');

const store = setupStore({
    ...initialState,
    Token: ReadCookieByName('tokken') || false,
    IdKkm: root.dataset.idKkm || false
});

render(
    store.getState().Token ?
        // false ?
        (<Provider store={store}>
            <App />
        </Provider>)
        : (<div className="alert alert-danger m-4"
            role="alert">
            <h4 className="alert-heading">Ошибка 401</h4>
            Неавторизованный пользователь
        </div>)
    , root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

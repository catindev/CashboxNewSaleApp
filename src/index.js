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
    // Данные для запросов
    Token: ReadCookieByName('tokken') || false,
    IdKkm: root.dataset.idKkm || false,

    SystemErrors: [],
    Errors: {},

    // Форма добавления новой позиции
    Sections: [],
    Domains: [],
    PositionForm: {
        "Name": "",
        "Price": "",
        "Markup": 0,
        "Discount": 0,
        "Qty": 1,
        "Section": 0
    },
    PositionFormErrors: {},

    IdDomain: false,    // Вид деятельности

    /** Предчек */
    Positions: [],      // Список товарных позиций
    Total: 0,           // Сумма к оплате     
    Cash: 0,            // Внесено наличными
    NonCash: 0,         // Внесено безналом     
});

render(
    store.getState().Token ?
        // false ?
        (<Provider store={store}>
            <App />
        </Provider>)
        : (<div className="alert alert-danger m-4"
            role="alert">
            <h4 className="alert-heading">Системная ошибка</h4>
            401: Не авторизованный пользователь
        </div>)
    , root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

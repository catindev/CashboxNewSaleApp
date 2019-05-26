import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reduceReducers from 'reduce-reducers';
import app from '../App/App.reducer';
import position from '../Components/NewPosition/NewPosition.reducer';
import precheck from '../Components/Precheck/Precheck.reducer';
import cash from '../Components/CashForm/CashForm.reducer';
const reducer = reduceReducers({}, app, position, precheck, cash);

const loggerMiddleware = createLogger({
    collapsed: true
});

export default function configure(initialState) {
    return createStore(
        reducer, initialState,
        process.env.NODE_ENV === 'development' ?
            compose(
                applyMiddleware(thunkMiddleware, loggerMiddleware),
                window.window.__REDUX_DEVTOOLS_EXTENSION__ ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
            )
            :
            applyMiddleware(thunkMiddleware)
    )
}
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduser from './redusers';

const loggerMiddleware = createLogger()

export default function configure(initialState) {
    return createStore(
        reduser, initialState,
        compose(
            applyMiddleware(thunkMiddleware, loggerMiddleware),
            window.window.__REDUX_DEVTOOLS_EXTENSION__ ? window.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    )
}
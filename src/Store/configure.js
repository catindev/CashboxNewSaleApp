import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduser from './reducers';

const loggerMiddleware = createLogger()

export default function configure(initialState) {
    return createStore(
        reduser, initialState,
        compose(
            applyMiddleware(thunkMiddleware, loggerMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
}
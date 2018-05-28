import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/index'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import reducer from './reducers'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware, compose } from 'redux'
import { ConnectedRouter } from 'react-router-redux'

export const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
    thunk,
    routerMiddleware(history)
]

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

ReactDOM.render(
    <Provider store={store} >
        <ConnectedRouter history={history}>
            <AppRouter />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
)
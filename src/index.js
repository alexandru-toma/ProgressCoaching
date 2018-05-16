import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/index'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <AppRouter />
    , document.getElementById('root')
)
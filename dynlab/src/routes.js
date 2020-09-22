import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Todos from './pages/Todos';
import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Todos} />
            <Route path="/login" exact component={Login} />
        </BrowserRouter>
    )
}
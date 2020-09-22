import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Todos from './pages/Todos';
import Nav from './pages/Nav';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Todos} />
            <Route path="/nav" exact component={Nav} />
        </BrowserRouter>
    )
}
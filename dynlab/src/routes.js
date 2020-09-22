import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Todos from './pages/todo/Todos';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Todos} />
        </BrowserRouter>
    )
}
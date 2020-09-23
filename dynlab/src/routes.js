import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Todos from './pages/todo/Todos';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/todo" exact component={Todos} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/profile" exact component={Profile} />
        </BrowserRouter>
    )
}
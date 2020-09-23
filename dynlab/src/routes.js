import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Todos from './pages/todo/Todos';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import Wallet from './pages/wallet/Wallet';
import Crypto from './pages/crypto/Crypto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/todo" exact component={Todos} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/wallet" exact component={Wallet} />
            <Route path="/crypto" exact component={Crypto} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={Todos} />
        </BrowserRouter>
    )
}
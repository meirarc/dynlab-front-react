import React from 'react';
import './App.css';

import Routes from './routes.js'
import Sidebar from './pages/sidebar/Sidebar';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const items = [
  { name: 'dashboard', label: 'Dashboard' },
  { name: 'todo', label: 'To-Do' },
]

function App() {
  return (
    
    <div>
        <Sidebar items={items} />
        <Routes />
    </div>

    
  );
}

export default App;
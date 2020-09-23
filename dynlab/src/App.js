import React from 'react';
import './App.css';

import Routes from './routes.js'
import Sidebar from './pages/sidebar/Sidebar';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App() {
  return (
    <>
        <Sidebar />
        <Routes />
    </>
  );
}

export default App;
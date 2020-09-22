import React from 'react';
import './App.css';

import Routes from './routes.js'

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App() {
  return (

      
    <Routes />
  );
}

export default App;
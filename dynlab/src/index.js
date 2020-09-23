import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'semantic-ui-css/semantic.css';
import '@aws-amplify/ui/dist/style.css';

import App from './App';
import * as serviceWorker from './serviceWorker'
import { withAuthenticator } from 'aws-amplify-react';
const AppWithAuth = withAuthenticator(App, false);

ReactDOM.render(
  <React.StrictMode>
    <AppWithAuth />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

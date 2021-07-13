import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { HapuProvider } from './services/contextApi';

ReactDOM.render(
  <React.StrictMode>
    <HapuProvider>
      <App />
    </HapuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

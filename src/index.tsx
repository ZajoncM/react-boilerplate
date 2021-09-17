import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root/Root';
import AppProvider from 'providers/AppProvider';
import 'assets/styles/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Root />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

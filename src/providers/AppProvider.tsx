import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {
  return (
    <Router>
      <GlobalStyle />
      {children}
    </Router>
  );
};

export default AppProvider;

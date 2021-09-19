import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { store } from 'store';
interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppProvider;

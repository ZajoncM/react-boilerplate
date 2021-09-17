import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Root from './Root';
import AppProvider from 'providers/AppProvider';

describe('Search Bar', () => {
  it('render Root component', () => {
    render(
      <AppProvider>
        <Root />
      </AppProvider>
    );
    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Redirect to click page', () => {
    render(
      <AppProvider>
        <Root />
      </AppProvider>
    );
    const linkElement = screen.getByText(/About/i);
    fireEvent.click(linkElement);

    screen.findByText(/Hello world/);
  });
});

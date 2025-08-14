'use client';

import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeProvider } from '../context/theme/ThemeContext';
import ErrorBoundary from '../components/error/errorBoundary';
import { AppProvider } from '../context/app/AppContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      {/* <ThemeProvider> */}
      <Provider store={store}>
        <AppProvider>{children}</AppProvider>
      </Provider>
      {/* </ThemeProvider> */}
    </ErrorBoundary>
  );
}

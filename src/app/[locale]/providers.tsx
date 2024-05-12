'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import store from './store/store';
import { ToastCustomContainer } from '@/app/[locale]/components/toast-custom-container/ToastCustomContainer';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem>
        {children}
        <ToastCustomContainer />
      </ThemeProvider>
    </Provider>
  );
}

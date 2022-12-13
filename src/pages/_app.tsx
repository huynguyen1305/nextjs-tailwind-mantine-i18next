import '@/styles/global.scss';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { AppLayout } from '@/components/AppLayout/AppLayout';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import AppThemeProvider from '@/config/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppThemeProvider>
    <ErrorBoundary>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ErrorBoundary>
  </AppThemeProvider>
);

export default appWithTranslation(MyApp);

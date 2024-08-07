import './globals.css';
import '../styles/index.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProviders } from '@/provider/ReduxProvider';
import ReactQueryProvider from '@/provider/ReactQueryProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { AxiosInterceptor } from '@/api/AxiosInterceptor';
import GnB from '@/components/common/navigation/GnB';
import InfoSidebar from '@/components/common/sidebar/InfoSidebar';
import Script from 'next/script';
import Drawer from '@/components/common/Drawer';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <ReduxProviders>
        <body className={inter.className} suppressHydrationWarning={true}>
          <ReactQueryProvider>
            <AppRouterCacheProvider>
              <AxiosInterceptor>
                <Script
                  strategy="beforeInteractive"
                  src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8cqmivfoiq&submodules=geocoder"
                />
                <div
                  style={{
                    backgroundColor: '#E5E7EB',
                  }}
                >
                  <GnB />
                  {children}
                  <InfoSidebar />
                  <Drawer />
                </div>
              </AxiosInterceptor>
            </AppRouterCacheProvider>
          </ReactQueryProvider>
        </body>
      </ReduxProviders>
    </html>
  );
}

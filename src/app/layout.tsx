import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProviders } from '@/provider/ReduxProvider';
import ReactQueryProvider from '@/provider/ReactQueryProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { AxiosInterceptor } from '@/api/AxiosInterceptor';
import GnB from '../components/navigation/GnB';
import Script from 'next/script';
import Drawer from '@/components/common/Drawer';
import BnB from '@/components/navigation/BnB';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PlavBuds',
  description: 'Generated by create PlavBuds',
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

                <div className="flex flex-col h-screen">
                  <div className="flex-shrink-0 h-[45px] z-50">
                    <GnB />
                  </div>
                  <main className="flex-grow overflow-y-auto">{children}</main>
                  <div className="flex-shrink-0 h-[60px] z-50">
                    <BnB />
                  </div>
                </div>
                <Drawer />
              </AxiosInterceptor>
            </AppRouterCacheProvider>
          </ReactQueryProvider>
        </body>
      </ReduxProviders>
    </html>
  );
}

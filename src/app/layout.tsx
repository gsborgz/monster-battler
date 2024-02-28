import Footer from '@/components/footer';
import Header from '@/components/header';
import Main from '@/components/main';
import Snackbar from '@/components/snackbar';
import GlobalProviders from '@/providers/global';
import '@/assets/globals.css';

export const metadata = {
  title: 'Monster Battler',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className='h-screen'>
        <GlobalProviders>
          <Header />

          <Main>
            <Snackbar />

            {children}
          </Main>

          <Footer />
        </GlobalProviders>
      </body>
    </html>
  )
}

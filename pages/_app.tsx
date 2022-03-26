import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Head from 'next/head'
import Footer from '../components/footer'
import Initial from '../components/initial'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Landersweb</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Portland, Oregon family software development company. Sepcialize in mobile apps and websites." />
      <meta name="author" content="Landersweb" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Landersweb" />
      <meta property="og:description" content="Portland, Oregon family software development company. Sepcialize in mobile apps and websites." />
      <meta property="og:site_name" content="Landersweb" />
    </Head>
    <div className="text-txt bg-bgdk-900">
      <div className="grid place-items-center">
        <div className="fixed top-0 z-50">
          <Header />
        </div>
        <div className="relative min-h-screen w-full">
          <Component {...pageProps} />
        </div>
        <div className="pt-4 w-full">
          <Footer />
        </div>
      </div>
    </div>
  </>
}

export default MyApp

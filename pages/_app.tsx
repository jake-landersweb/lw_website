import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Head from 'next/head'
import Footer from '../components/footer'
import Router, { useRouter } from "next/router"
import { useEffect } from 'react'
import * as ga from '../components/analytics/analytics'
import * as env from '../components/analytics/.env.js'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
    console.log(router);

    // log google analytics
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

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
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${env.GOOGLEALAYTICS}`}></script>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${env.GOOGLEALAYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${env.GOOGLEALAYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }} />
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

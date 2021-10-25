import React, { useEffect, FC } from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import '../styles/global.css'
import '../styles/styles.scss'
import '../styles/normalize.scss'
import Head from 'next/head'
import CustomHead from '@components/CustomHead'
import { pageview } from 'src/lib/gtag'
import { useRouter } from 'next/router'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => pageview(url)

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <CustomHead />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

// export function reportWebVitals({
//   id,
//   name,
//   label,
//   value,
// }: NextWebVitalsMetric) {
//   // Use `window.gtag` if you initialized Google Analytics as this example:
//   // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
//   window.gtag('event', name, {
//     event_category:
//       label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
//     value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//     event_label: id, // id unique to current page load
//     non_interaction: true, // avoids affecting bounce rate.
//   })
// }

export default MyApp

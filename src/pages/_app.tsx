import {Analytics} from '@vercel/analytics/react'
import {AppProps} from "next/app"

import '../styles/globals.css'
// import '../styles/md.css'
// import '../styles/photos.css'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps}/>
      <Analytics/>
    </>
  )
}

export default MyApp

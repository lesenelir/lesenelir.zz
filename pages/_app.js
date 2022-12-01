import {Analytics} from "@vercel/analytics/dist/react"

import '../styles/globals.css'
import '../styles/md.css'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Component {...pageProps}/>
      <Analytics/>
    </>
  )
}

export default MyApp

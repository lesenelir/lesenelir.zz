import {useEffect, useState} from "react"
import Head from "next/head"
import Navbar from "./navbar"
import Animation from "./animation"

import styles from '../styles/layout.module.css'

export const siteName = 'Lesenelir Zhou'

function Layout(props) {
  const [theme, setTheme] = useState('light')

  // theme change Effect
  useEffect(() => {
    if (localStorage.getItem('mode')) {
      setTheme(localStorage.getItem('mode'))
    }
  }, [])

  return (
    <div className='layout' color-mode={theme}>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      {/* All Pages Layout Component */}
      <Animation/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout

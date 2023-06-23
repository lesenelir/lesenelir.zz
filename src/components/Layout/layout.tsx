import {useEffect, useState} from "react"
import {NextRouter, useRouter} from "next/router"
import Head from "next/head"
import Navbar from "./navbar"
import Plum from "../Utils/plum"

import styles from '../../styles/layout.module.css'

export const siteName = 'Lesenelir Zhou'

interface IProps {
  children: JSX.Element
}

function Layout(props: IProps): JSX.Element {
  const [theme, setTheme] = useState<string>('light')
  const router: NextRouter = useRouter()

  // theme change Effect
  useEffect(() => {
    if (localStorage.getItem('mode')) {
      setTheme(localStorage.getItem('mode'))
    }
  }, [])

  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <div className='layout' color-mode={theme}>
        {/* All Pages Layout Component */}
        {/*<Animation/>*/}
        <Navbar theme={theme} setTheme={setTheme}/>
        <div className={styles.container}>
          {props.children}
        </div>
        {router.pathname !== '/posts/[id]' && <Plum/>}
        {/*<Plum/>*/}
      </div>
    </>
  )
}

export default Layout

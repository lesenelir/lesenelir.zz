import Head from "next/head"
import Navbar from "./navbar"

import styles from '../styles/layout.module.css'

export const siteName = 'Lesenelir Zhou'

//Layout 是一个所有page页面的公用组件
function Layout(props) {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      {/*整个布局*/}
      <Navbar/>
      <div className={styles.container}>
        {props.children}
      </div>
    </>
  )
}

export default Layout

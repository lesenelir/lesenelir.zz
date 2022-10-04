import Head from "next/head"
import Navbar from "./navbar"

export const siteName = 'Lesenelir Zhou'

//Layout 是一个所有page页面的公用组件
function Layout(props) {
  return (
    <div>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js" />
        <link rel="icon" href={`/favicon.ico`} />
      </Head>

      {/*整个布局*/}
      <div>
        {/*  Navbar是固定不变的，放入Layout */}
        <Navbar/>
        {/* Content内容不是固定的，不放入Layout，Layout随着改变 */}
        {/*Layout布局包裹不同的内容（由URL来决定），显示*/}
        {props.children}
      </div>

    </div>
  )
}

export default Layout

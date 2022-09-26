import Head from 'next/head'
import Home from '../components/Home/home'
import Layout from "../components/layout"


function HomePage() {
  return (
    <div>
      <Head>
        <title>Lesenelir Zhou</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <Layout>
        <Home/>
      </Layout>
    </div>
  )
}

export default HomePage

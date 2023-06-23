import Head from 'next/head'
import Home from '../components/Home/home'
import Layout from "../components/Layout/layout"

function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Lesenelir Zhou</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <Layout>
        <Home/>
      </Layout>
    </>
  )
}

export default HomePage
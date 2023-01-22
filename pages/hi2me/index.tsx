import Head from "next/head"
import Layout from "../../components/layout"
import Hi from "../../components/Hi2Me/hi"

function Hi2me(): JSX.Element {
  return (
    <>
      <Head>
        <title>Lesenelir&apos;s Hi2Me dApp</title>
      </Head>

      <Layout>
        <Hi/>
      </Layout>
    </>
  )
}

export default Hi2me

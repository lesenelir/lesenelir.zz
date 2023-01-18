import Head from "next/head"
import Layout from "../../components/layout"
import Photo from "../../components/Photo/photo"


function Photos() {
  return (
    <>
      <Head>
        <title>Lesenelir&apos;s Photos</title>
      </Head>

      <Layout>
        <Photo/>
      </Layout>
    </>
  )
}

export default Photos

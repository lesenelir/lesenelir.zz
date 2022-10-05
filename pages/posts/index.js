import Head from "next/head"
import Layout from "../../components/layout"
import Content from "../../components/Post/content"
// import Footer from "../../components/footer"

import {getSortedPostsData} from "../../lib/postsTool"

function PostsPage(props) {
  const {allPostsData} = props

  return (
    <>
      <Head>
        <title>Lesenelir&apos;s Blog</title>
      </Head>

      <Layout>
        <Content allPosts={allPostsData}/>
        {/*<Footer/>*/}
      </Layout>
    </>
  )
}

export default PostsPage

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

import Head from "next/head"
import Layout from "../../components/layout"
import Content from "../../components/Post/content"
import Footer from "../../components/footer"

import {getSortedPostsData} from "../../lib/postsTool"

function PostsPage(props) {
  const {allPostsData} = props
  // console.log(allPostsData)
  return (
    <>
      <Head>
        <title>Lesenelir&apos;s Blog</title>
      </Head>

      <Layout>
        {/*<h1>BlogPage</h1>*/}
        {allPostsData.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.date}</p>
          </li>
        ))}
        <Content/>
        <Footer/>
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

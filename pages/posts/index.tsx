import Head from "next/head"
import Layout from "../../components/Layout/layout"
import Content from "../../components/Post/content"
import {GetStaticProps} from "next"
import {getSortedPostsData} from "../../lib/postsTool"

interface IPost {
  id: string,
  title: string,
  date: string,
  duration: string
}

interface IProps {
  allPostsData: IPost[]
}

function PostsPage(props: IProps): JSX.Element {
  const {allPostsData} = props

  return (
    <>
      <Head>
        <title>Lesenelir&apos;s Blog</title>
      </Head>

      <Layout>
        <Content allPosts={allPostsData}/>
      </Layout>
    </>
  )
}

export default PostsPage

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData: IPost[] = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

import {useEffect} from "react"
import Head from "next/head"
import Layout from "../../components/Layout/layout"
import Footer from "../../components/Layout/footer"
import SubTitle from "../../components/Post/subTitle"
import Cd from "../../components/Utils/cd"
import {GetStaticPaths, GetStaticProps} from "next"
import "highlight.js/styles/lioshi.css"
import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import {getAllPostIds, getPostDataById} from "../../lib/postsTool"

import styles from '../../styles/markdown.module.css'

interface IPostData {
  id: string,
  contentHtml: string,
  title: string,
  date: string,
  duration: string
}

interface IProps {
  postData: IPostData
}

function Post(props: IProps): JSX.Element {
  // get post content by props.postData
  const {postData} = props

  useEffect(() => {
    hljs.registerLanguage("jsx", javascript)
    hljs.highlightAll();
  })

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <Layout>
        <div className={styles.container}>
          <h1 className={styles.title}>{postData.title}</h1>
          <SubTitle
            dateString={postData.date}
            duration={postData.duration}
          />
          <article className='md'>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
          </article>
          <Cd/>
          <Footer/>
        </div>
      </Layout>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}: {params: {id: string}}) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostDataById(params?.id as string)
  return {
    props: {
      postData
    }
  }
}
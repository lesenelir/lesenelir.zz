import {useEffect} from "react"
import Head from "next/head"
import Layout from "../../components/layout"
import Footer from "../../components/footer"
// import Date from "../../components/date"
import SubTitle from "../../components/subTitle"
import Cd from "../../components/cd"
import "highlight.js/styles/lioshi.css"
import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import {getAllPostIds, getPostDataById} from "../../lib/postsTool"

import styles from '../../styles/markdown.module.css'

function Post(props) {
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
          {/*<Date dateString={postData.date}/>*/}
          {/*<span style={{opacity: '50%', fontSize: '16px'}}>{postData.duration}</span>*/}
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

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  // console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostDataById(params.id)

  return {
    props: {
      postData
    }
  }
}

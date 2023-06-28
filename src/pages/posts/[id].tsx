import Head from "next/head"
import {useEffect} from "react"
import {GetStaticPaths, GetStaticProps} from "next"

// import "highlight.js/styles/lioshi.css"
// import 'highlight.js/styles/atom-one-light.css'
// import 'highlight.js/styles/panda-syntax-light.css'
import 'highlight.js/styles/color-brewer.css'
import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"

import {IPostData} from "../../libs/types"
import {getAllPostIds, getPostDataById} from "../../libs/postsTool"
import PostSubTitle from "../../components/post/postSubTitle"
import Cd from "../../components/utils/Cd"
import Footer from "../../components/utils/Footer"

interface IProps {
  postData: IPostData
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {params: {id: string}}[] = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}: {params: {id: string}}) => {
  // Fetch necessary data for the blog post using params.id
  const postData: {id: string, contentHtml: string} = await getPostDataById(params?.id as string)
  return {
    props: {
      postData
    }
  }
}

function Post(props: IProps) {
  const {postData} = props

  console.log(postData)

  useEffect(() => {
    hljs.registerLanguage("jsx", javascript)
    hljs.highlightAll()
  })

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <div className={'flex flex-row justify-center'}>
        <div className={'p-6 max-w-3xl overflow-auto'}>
          <h1 className={'text-2xl font-bold text-black dark:text-white mb-4'}>{postData.title}</h1>
          <PostSubTitle dateString={postData.date} duration={postData.duration}/>
          {/* TODO: markdown  code css */}
          <article className={'prose dark:prose-dark'}>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
          </article>

          <div className={'mt-8'}>
            <Cd/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post

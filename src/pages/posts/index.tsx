import Head from "next/head"
import {GetStaticProps} from "next"

import {IPost} from "../../libs/types"
import {getSortedPostsData} from "../../libs/postsTool"
import Item from "../../components/post/Item"
import Cd from "../../components/utils/Cd";
import Footer from "../../components/utils/Footer";

interface IProps {
  allPostsData: IPost[]
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData: IPost[] = await getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

function PostsPage(props: IProps) {
  const {allPostsData} = props

  console.log(allPostsData)

  const getPostsByYear = (year: string) => {
    return allPostsData.filter(post => post.date.includes(year))
  }

  return (
    <>
      <Head>
        <title>Posts - Lesenelir Zhou</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <div className={'flex flex-row justify-center'}>
        <div className={'p-6 max-w-3xl'}>
          {/* 2023 posts */}
          <p className={'text-yearColor text-3xl'}>2023</p>
          {getPostsByYear('2023').map((post: IPost) => (
            <Item
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              duration={post.duration}
            />
          ))}

          {/* 2022 posts */}
          <p className={'text-yearColor text-3xl my-4'}>2022</p>
          {getPostsByYear('2022').map((post: IPost) => (
            <Item
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              duration={post.duration}
            />
          ))}

          <div className={'mt-8'}>
            <Cd/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostsPage

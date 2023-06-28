import Head from "next/head"
import {GetStaticProps} from "next"

import {ITimelineData} from "../../libs/types"
import {getTimePost} from "../../libs/timeTool"
import Cd from "../../components/utils/Cd";
import Footer from "../../components/utils/Footer";

interface IProps {
  timelineData: ITimelineData
}

export const getStaticProps: GetStaticProps = async () => {
  const timelineData = await getTimePost()

  return {
    props: {
      timelineData
    }
  }
}

function TimelinePage(props: IProps) {
  const {timelineData} = props

  return (
    <>
      <Head>
        <title>Timeline - Lesenelir Zhou</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <div className={'flex flex-row justify-center'}>
        <div className={'p-6 max-w-3xl'}>
          {/* Content */}
          <h1 className={'text-3xl text-textLightStrong font-bold dark:text-textDarkStrong'}>Timeline</h1>
          <article className={'prose dark:prose-d ark'}>
            <div dangerouslySetInnerHTML={{__html: timelineData.contentHtml}}/>
          </article>

          {/* Page Footer */}
          <div className={'mt-8'}>
            <Cd/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimelinePage

import Layout from "../../components/Layout/layout"
import Footer from "../../components/Layout/footer"
import Cd from "../../components/Utils/cd"
import {GetStaticProps} from "next"
import {getTimePost} from "../../lib/timeTool"

import styles from '../../styles/timeline.module.css'

interface ITimelineData {
  contentHtml: string,
  title: string,
  date: string
}

interface IProps {
  timelineData: ITimelineData
}

function TimelinePage(props: IProps): JSX.Element {
  const {timelineData} = props

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>Timeline</h1>
            <article className='md'>
              <div dangerouslySetInnerHTML={{__html: timelineData.contentHtml}}/>
            </article>
            <Cd/>
            <Footer/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default TimelinePage

export const getStaticProps: GetStaticProps = async () => {
  const timelineData = await getTimePost()

  return {
    props: {
      timelineData
    }
  }
}

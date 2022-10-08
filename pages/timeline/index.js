import Layout from "../../components/layout"
import Footer from "../../components/footer"
import {getTimePost} from "../../lib/timeTool"

import styles from '../../styles/timeline.module.css'


function TimelinePage(props) {
  const {timelineData} = props

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>Timeline</h1>
            <article className='md time'>
              <div dangerouslySetInnerHTML={{ __html: timelineData.contentHtml }} />
            </article>
            <Footer/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default TimelinePage

export async function getStaticProps() {
  const timelineData = await getTimePost()
  console.log(timelineData)

  return {
    props: {
      timelineData
    }
  }
}

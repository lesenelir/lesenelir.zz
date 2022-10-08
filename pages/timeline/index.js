import Layout from "../../components/layout"
import Footer from "../../components/footer"
import {getTimePost} from "../../lib/timeTool"

function TimelinePage(props) {
  const {timelineData} = props

  return (
    <>
      <Layout>
        <article className='md'>
          <div dangerouslySetInnerHTML={{ __html: timelineData.contentHtml }} />
        </article>
        <Footer/>
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

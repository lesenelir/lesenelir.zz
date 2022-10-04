import Head from "next/head"
import Layout from "../../components/layout"
import Project from "../../components/Project/project"

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Lesenelir Zhou Projects</title>
      </Head>

      <Layout>
        <Project/>
      </Layout>
    </>
  )
}

export default ProjectsPage

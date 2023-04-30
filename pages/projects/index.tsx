import Head from "next/head"
import Layout from "../../components/Layout/layout"
import Project from "../../components/Project/project"

function ProjectsPage(): JSX.Element {
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

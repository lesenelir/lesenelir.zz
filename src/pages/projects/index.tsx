import Head from "next/head"

import Item from "../../components/project/Item"
import Cd from "../../components/utils/Cd"
import Footer from "../../components/utils/Footer"
import {deepLearningList, frontEndList, othersList, web3List} from "../../libs/projectsTool"

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Lesenelir Zhou</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <div className={'flex flex-row justify-center'}>
        <div className={'p-6 max-w-3xl'}>
          <h1 className={'text-4xl font-comic font-semibold text-black mb-6 dark:text-white'}>Projects</h1>
          <p className={'text-borderUnderline italic mb-6'}>List of my projects</p>
          {/* Font-end Projects */}
          <h4 className={'font-bold mb-4 text-navbarLight opacity-80 dark:text-navbarDark dark:opacity-80'}>Front-End</h4>
          <div className={'flex flex-row flex-wrap justify-between gap-2'}>
            {frontEndList.map((item) => (
              <Item
                key={item.name}
                name={item.name}
                description={item.description}
                icon={item.icon}
                repo={item.repo}
              />
            ))}
          </div>

          {/* Web3 Projects */}
          <h4 className={'font-bold my-4 text-navbarLight opacity-80 dark:text-navbarDark dark:opacity-80'}>Web3</h4>
          <div className={'flex flex-row flex-wrap justify-between gap-2'}>
            {web3List.map((item) => (
              <Item
                key={item.name}
                name={item.name}
                description={item.description}
                icon={item.icon}
                repo={item.repo}
              />
            ))}
          </div>

          {/* Deep Learning Projects */}
          <h4 className={'font-bold my-4 text-navbarLight opacity-80 dark:text-navbarDark dark:opacity-80'}>Deep Learning</h4>
          <div className={'flex flex-row flex-wrap justify-between gap-2'}>
            {deepLearningList.map((item) => (
              <Item
                key={item.name}
                name={item.name}
                description={item.description}
                icon={item.icon}
                repo={item.repo}
              />
            ))}
          </div>

          {/* Other Projects */}
          <h4 className={'font-bold my-4 text-navbarLight opacity-80 dark:text-navbarDark dark:opacity-80'}>Others</h4>
          <div className={'flex flex-row flex-wrap justify-between gap-2'}>
            {othersList.map((item) => (
              <Item
                key={item.name}
                name={item.name}
                description={item.description}
                icon={item.icon}
                repo={item.repo}
              />
            ))}
          </div>

          <div className={'mt-8'}>
            <Cd/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage

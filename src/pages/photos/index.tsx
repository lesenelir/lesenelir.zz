import Head from "next/head"

import Item from "../../components/photo/Item"
import Cd from "../../components/utils/Cd"
import Footer from "../../components/utils/Footer"

function PhotosPage() {
  return (
    <>
      <Head>
        <title>Photos - Lesenelir Zhou</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <div className={'flex flex-row justify-center'}>
        <div className={'p-6 max-w-3xl'}>
          <h1 className={'text-4xl font-comic font-semibold text-black mb-6 dark:text-white'}>Photos</h1>

          <p className={'mb-2'}>2023-06-11</p>
          <Item currentDate={'2023-06-11'}/>

          <p className={'mb-2'}>2023-06-05</p>
          <Item currentDate={'2023-06-05'}/>

          <p className={'mb-2'}>2022-11-30</p>
          <Item currentDate='2022-11-30'/>

          <p className={'mb-2'}>2022-11-28</p>
          <Item currentDate='2022-11-28'/>

          <p className={'mb-2'}>2022-03-04</p>
          <Item currentDate='2022-03-04'/>

          <p className={'mb-2'}>2021-07-11</p>
          <Item currentDate='2021-07-11'/>

          <p className={'mb-2'}>2021-04-24</p>
          <Item currentDate='2021-04-24'/>

          <p className={'mb-2'}>2021-01-28</p>
          <Item currentDate='2021-01-28'/>

          <div className={'mt-8'}>
            <Cd/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhotosPage

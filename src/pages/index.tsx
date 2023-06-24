import Head from "next/head"

function HomePage() {
  return (
    <>
      <Head>
        <title>Lesenelir Zhou</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <p>
        home
      </p>
    </>
  )
}

export default HomePage

import Head from 'next/head'

function HomePage() {
  return (
    <div>
      <Head>
        <title>Lesenelir Zhou</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js" />
        <link rel="icon" href={`/favicon.ico`} />
      </Head>

      <h1>Blog Home Page</h1>

    </div>
  )
}

export default HomePage

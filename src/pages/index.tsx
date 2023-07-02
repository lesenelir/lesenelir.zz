import Head from "next/head"
import Link from "next/link"

import Divider from "../components/utils/Divider"
import ExternalLink from "../components/home/ExternalLink"
import Footer from "../components/utils/Footer"

function HomePage() {
  return (
    <>
      <Head>
        <title>Lesenelir Zhou</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <div className={'flex flex-row justify-center'}>
        <div className={'p-6 max-w-3xl'}>
          <h1 className={'text-4xl font-comic font-semibold text-black mb-6 dark:text-white'}>Lesenelir Zhou</h1>
          <article className={'leading-8 text-justify'}>
            {`
              Hi, I'm Lesenelir Zhou, a dedicated web developer with a degree in Computer Science.
              The current focus is on acquiring expertise in front-end development, 
              while also delving into the exploration of blockchain cryptography. 
              I'm passionate about bringing my acquired knowledge to life by developing innovative projects 
              based on the React and blockchain ecosystems.
            `}
          </article>
          <Divider/>

          <article className={'leading-8 text-justify'}>
            {`
              I take pleasure in coding and I'm always keen to share the knowledge I've gained. 
              For me, programming is more than just a skill, it's a means of self-expression and a channel for creativity. 
            `}
            {`
              All of my projects and demos, along with their
            `}
            <ExternalLink href={'https://github.com/lesenelir'}>GitHub</ExternalLink>
            {`
              repositories and some online pages, 
              can be accessed on the
            `}
            <Link href={'/projects'}>
              <a className={
                'text-black dark:text-white ' +
                'transition-colors duration-300 ease-in ' +
                'border-solid border-b-[1px] border-b-borderUnderline border-opacity-30 hover:border-opacity-100'
              }>Projects page.</a>
            </Link>
            <br/>
            {`
              Some of my personal projects: 
            `}
            <ExternalLink href={'https://github.com/lesenelir/next-gpt'}>nextGPT</ExternalLink>
            {`,`}
            <ExternalLink href={'https://github.com/lesenelir/lesenelir.me'}>{' '}lesenelir.me</ExternalLink>
            {`,`}
            <ExternalLink href={'https://github.com/lesenelir/meta-react-admin'}>{' '}react admin system</ExternalLink>
            {`,`}
            <ExternalLink href={'https://github.com/lesenelir/mini-react'}>{' '}mini react</ExternalLink>
            {`,`}
            <ExternalLink href={'https://github.com/lesenelir/meta-baidu'}>{' '}flex-baidu</ExternalLink>
            {`.`}
          </article>
          <Divider/>

          <article className={'leading-8 text-justify'}>
            {`
              At the same time, I am also interested in web3 & crypto. 
              I'm currently acquiring the fundamentals of web3 knowledge and contract development through 
            `}
            <ExternalLink href={'https://learnweb3.io/'}>
              {' '}LearnWeb3 DAO
            </ExternalLink>
            {'.'}
            {`
              Additionally, I will write down my thoughts and insights in Chinese on Mirror. 
              You can find me on Mirror by
            `}
            <ExternalLink href={'https://mirror.xyz/lesenelir.eth'}>
              {' '}Lesenelir.eth
            </ExternalLink>
            {'.'}
          </article>
          <Divider/>

          <article className={'leading-8 text-justify'}>
            {`
              Apart from programming, I enjoy watching movies. 
              I aspire to pursue a degree in film directing at New York University 
              and become a director of the new generation in China.
            `}
          </article>
          <Divider/>

          <article className={'leading-8'}>
            <p>
              Find me on {' '}
              <ExternalLink href={'https://github.com/lesenelir'}>Github</ExternalLink>
              ,{'  '}
              <ExternalLink href={'https://leetcode.cn/u/lesenelir/'}>LeetCode</ExternalLink>
              ,{'  '}
              <ExternalLink href={'https://mirror.xyz/lesenelir.eth'}>Mirror</ExternalLink>
            </p>
            <p>
              Mail me at {' '}
              <ExternalLink href={'mailto:hi@lesenelir.me'}>
                hi@lesenelir.me
              </ExternalLink>
            </p>
          </article>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default HomePage

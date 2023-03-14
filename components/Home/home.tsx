import Divider from "../divider"
import Footer from "../footer"

import styles from '../../styles/home.module.css'

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.name}>Lesenelir Zhou</h1>
        <article>
          <p>
            Hi, I am Lesenelir Zhou, a web developer.{' '}
            Studying at Jinan University, majoring in Computer Science.
          </p>
          <p>
            The current focus is on acquiring expertise in front-end development, exploring blockchain technology,
          </p>
          <p>
            and building more projects based on the React ecosystem and blockchain ecosystem.
          </p>
        </article>
        <Divider/>

        <article>
          <p>
            I enjoy programming and sharing what I have learned. {' '}
            To me, programming is a way of self-expression
          </p>
          <p>
            and creativity. All of my projects and demos, along with their {' '}
            <a href='https://github.com/lesenelir'
               rel='noreferrer'
               target='_blank'
               className={styles.link}
            >
              GitHub
            </a>
            {' '} repositories and some online
          </p>
          <p>
            pages, can be accessed on the {' '}
            <a href={`/projects`} rel='noreferrer' className={styles.link}>
              Projects page
            </a>.
          </p>
          <p>
            Some of my projects: react admin system | web portfolio | mini react | flex baidu
          </p>
        </article>
        <Divider/>

        <article>
          <p>
            At the same time, I am also interested in web3 & crypto. Learning the basics of web3 knowledge and
          </p>
          <p>
            contract development from {' '}
            <a
              href="https://learnweb3.io/"
              rel='noreferrer'
              target='_blank'
              className={styles.link}
            >
              LearnWeb3 DAO
            </a>.
            {' '} Additionally, I will write some articles from my thinking
          </p>
          <p>
            in Chinese on mirror. You can find me on mirror by {' '}
            <a
              href="https://mirror.xyz/lesenelir.eth"
              rel='noreferrer'
              target='_blank'
              className={styles.link}
            >
              Lesenelir.eth
            </a>.
          </p>
        </article>
        <Divider/>

        <article>
          <p>
            Apart from programming, I take pleasure in watching movies. I aspire to pursue a degree in film
            {/*Outside of programming, I enjoy watching movies.{' '}*/}
            {/*My dream is to study directing at New York*/}
          </p>
          <p>
            directing at New York University and become a director of the new generation in China.
          </p>
        </article>
        <Divider/>

        <article className={styles.last}>
          <p>
            Find me on {' '}
            <a href='https://github.com/lesenelir'
               rel='noreferrer'
               target='_blank'
               className={styles.link}
            >
              Github
            </a>
            ,{'  '}
            <a href='https://leetcode.cn/u/lesenelir/'
               rel='noreferrer'
               target='_blank'
               className={styles.link}
            >
              LeetCode
            </a>
            , {' '}
            <a href='https://mirror.xyz/lesenelir.eth'
               rel='noreferrer'
               target='_blank'
               className={styles.link}
            >
              Mirror
            </a>
          </p>
          <p>
            Mail me at {' '}
            <a
              href='mailto:hi@lesenelir.me'
              rel='noreferrer'
              target='_blank'
              className={styles.link}
            >
              hi@lesenelir.me
            </a>
          </p>
        </article>
        <Footer/>
      </div>
    </div>
  )
}

export default Home

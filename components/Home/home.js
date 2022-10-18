import Divider from "../divider"
import Footer from "../footer"

import styles from '../../styles/home.module.css'

function Home() {
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
            The current focus is building more projects, based on the React ecosystem.
          </p>
        </article>
        <Divider/>

        <article>
          <p>
            I enjoy programming and sharing what I have learned. {' '}
            You can find my all projects and demos on the {' '}
          </p>
          <p>
            <a href={`/projects`} rel='noreferrer' className={styles.link}>
              projects page,
            </a>
            {' '} with {' '}
            <a href='https://github.com/lesenelir'
               rel='noreferrer'
               target='_blank'
               className={styles.link}
            >
              Github
            </a>
            {' '} repositories and some online pages.
          </p>
          <p>
            Some of my projects: React admin system | Flex-Baidu
          </p>
        </article>
        <Divider/>

        <article>
          <p>
            At the same time, I am also interested in web3. Learning the basics of web3 knowledge and contract
          </p>
          <p>
            development from {' '}
            <a
              href="https://learnweb3.io/"
              rel='noreferrer'
              target='_blank'
              className={styles.link}
            >
              LearnWeb3 DAO.
            </a>
            {' '} I will write some articles from my thinking in Chinese on mirror.
          </p>
          <p>
            You can find me on mirror by {' '}
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
            Outside of programming, I enjoy watching movies.{' '}
            {/*I hope to study directing at NYU one day.*/}
            My dream is to study directing at NYU one day, and
          </p>
          <p>
            become a new generation of leading Chinese directors.
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

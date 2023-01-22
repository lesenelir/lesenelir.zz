import {Dispatch, SetStateAction} from "react"
import Link from "next/link"

import styles from '../styles/navbar.module.css'

interface Props {
  theme: string,
  setTheme: Dispatch<SetStateAction<string>>
}

function Navbar(props: Props) {
  const {theme, setTheme} = props

  const changeTheme = () => {
    setTheme(preTheme => {
      return preTheme === 'light' ? 'dark' : 'light'
    })
    // 异步更新State，拿到的还是原来的theme
    // console.log(theme)
    localStorage.setItem('mode', theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={styles.container}>
      <Link href='/'>
        <a className={styles.signature}>Lesenelir</a>
      </Link>

      <nav className={styles.nav}>
        {/*Mobile Icon*/}
        <Link href={`/posts`}>
          <span className={`iconfont ${styles.mobile} ${styles.icon}`}>
            &#xe634;
          </span>
        </Link>
        <Link href={`/projects`}>
          <span className={`iconfont ${styles.mobile} ${styles.icon}`}>
            &#xe617;
          </span>
        </Link>

        {/*PC Icon*/}
        <Link href='/'>
          <a className={`${styles.link} ${styles.pc}`}>Home</a>
        </Link>
        <Link href={`/posts`}>
          <a className={`${styles.link} ${styles.pc}`}>Posts</a>
        </Link>
        <Link href={`/projects`}>
          <a className={`${styles.link} ${styles.pc}`}>Projects</a>
        </Link>
        <Link href={`/photos`}>
          <a className={`${styles.link} ${styles.pc}`}>Photos</a>
        </Link>
        <Link href={`/timeline`}>
          <a className={`${styles.link} ${styles.pc}`}>Timeline</a>
        </Link>
        <Link href={`/hi2me`}>
          <a className={`${styles.link} ${styles.pc}`}>Hi2Me</a>
        </Link>
        <Link href='https://mirror.xyz/lesenelir.eth'>
          <a
            rel='noreferrer'
            target='_blank'
            className={`iconfont ${styles.icon} ${styles.link} ${styles.pc}`}
          >
            &#xec48;
          </a>
        </Link>
        <Link href='https://twitter.com/lesenelir'>
          <a
            rel='noreferrer'
            target='_blank'
            className={`iconfont ${styles.icon} ${styles.link} ${styles.pc}`}
          >
            &#xe646;
          </a>
        </Link>

        {/*Default Icon*/}
        <Link href='https://github.com/lesenelir'>
          <a
            rel='noreferrer'
            target='_blank'
            className={`iconfont ${styles.icon}`}
          >
            &#xe799;
          </a>
        </Link>
        {
          theme === 'light' ? (
            <span className={`iconfont ${styles.icon}`} onClick={changeTheme}>
              &#xe642;
            </span>
          ) : (
            <span className={`iconfont ${styles.icon}`} onClick={changeTheme}>
              &#xe781;
            </span>
          )
        }
      </nav>
    </div>
  )
}

export default Navbar

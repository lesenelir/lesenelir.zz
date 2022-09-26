import Link from "next/link"

import styles from '../styles/navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <a className={styles.signature}>Lesenelir</a>
      </Link>

      <nav className={styles.nav}>
        <Link href='/'>
          <a className={styles.link}>Me</a>
        </Link>
        <Link href={`posts`}>
          <a className={styles.link}>Blog</a>
        </Link>
        <Link href={`timeline`}>
          <a className={styles.link}>Timeline</a>
        </Link>
        <Link href={`projects`}>
          <a className={styles.link}>Projects</a>
        </Link>

        <a
          href='https://github.com/lesenelir'
          rel='noreferrer'
          target='_blank'
          className={`iconfont ${styles.icon}`}
        >
          &#xe732;
        </a>
        <span className={`iconfont ${styles.icon}`}>
          &#xe64c;
        </span>
      </nav>

    </div>
  )
}

export default Navbar

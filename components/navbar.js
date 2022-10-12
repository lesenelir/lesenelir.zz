import Link from "next/link"

import styles from '../styles/navbar.module.css'

function Navbar(props) {
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
          <a className={`${styles.link} ${styles.pc}`}>Blog</a>
        </Link>
        <Link href={`/projects`}>
          <a className={`${styles.link} ${styles.pc}`}>Projects</a>
        </Link>
        <Link href={`/timeline`}>
          <a className={`${styles.link} ${styles.pc}`}>Timeline</a>
        </Link>

        {/*Default Icon*/}
        <a
          href='https://github.com/lesenelir'
          rel='noreferrer'
          target='_blank'
          className={`iconfont ${styles.icon}`}
        >
          &#xe732;
        </a>
        {
          theme === 'light' ? (
            <span className={`iconfont ${styles.icon}`} onClick={changeTheme}>
              &#xe64c;
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

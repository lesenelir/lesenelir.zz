import {NextRouter, useRouter} from "next/router"

import styles from '../styles/cd.module.css'

function Cd(): JSX.Element {
  const router: NextRouter = useRouter()

  const handleClick = async () => {
    if (router.pathname === '/posts/[id]') {
      router.back()
    } else {
      await router.push('/')
    }
  }

  return (
    <div className={styles.box}>
      <span onClick={handleClick}>
        <a className={styles.link}>
          cd {' '}.{' '}.
        </a>
      </span>
    </div>
  )
}

export default Cd

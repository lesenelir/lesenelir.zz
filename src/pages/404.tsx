import Layout from "../components/Layout/layout"
import Footer from "../components/Layout/footer"

import styles from '../styles/404.module.css'

function NotFoundPage(): JSX.Element {
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>404</h1>
          <p className={styles.subTitle}>Nice to meet you!</p>
          <Footer/>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

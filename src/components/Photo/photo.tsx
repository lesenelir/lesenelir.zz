import Item from "./item"
import Cd from "../Utils/cd"
import Footer from "../Layout/footer"

import styles from '../../styles/photo.module.css'

function Photo(): JSX.Element {
  return (
    <div className={styles.box}>
      <div>
        <p className={styles.date}>2022-11-30</p>
        <Item currentDate='2022-11-30'/>

        <p className={styles.date}>2022-11-28</p>
        <Item currentDate='2022-11-28'/>

        <p className={styles.date}>2022-03-04</p>
        <Item currentDate='2022-03-04'/>

        <p className={styles.date}>2021-07-11</p>
        <Item currentDate='2021-07-11'/>

        <p className={styles.date}>2021-04-24</p>
        <Item currentDate='2021-04-24'/>

        <p className={styles.date}>2021-01-28</p>
        <Item currentDate='2021-01-28'/>

        <Cd/>
        <Footer/>
      </div>
    </div>
  )
}

export default Photo

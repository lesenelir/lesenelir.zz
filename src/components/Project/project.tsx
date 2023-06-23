import Footer from "../Layout/footer"
import Item from "./item"
import Cd from "../Utils/cd"
import {deepLearningList, frontEndList, othersList, web3List} from "./data"

import styles from '../../styles/project.module.css'


function Project(): JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subTitle}>List of my projects</p>

        <h4 className={styles.h4Title}>Front-End</h4>
        <div className={styles.list}>
          {frontEndList.map((item) => (
            <Item
              key={item.name}
              name={item.name}
              description={item.description}
              icon={item.icon}
              repo={item.repo}
            />
          ))}
        </div>

        <h4 className={styles.h4Title}>Web3</h4>
        <div className={styles.list}>
          {web3List.map((item) => (
            <Item
              key={item.name}
              name={item.name}
              description={item.description}
              icon={item.icon}
              repo={item.repo}
            />
          ))}
        </div>

        <h4 className={styles.h4Title}>Deep Learning</h4>
        <div className={styles.list}>
          {deepLearningList.map((item) => (
            <Item
              key={item.name}
              name={item.name}
              description={item.description}
              icon={item.icon}
              repo={item.repo}
            />
          ))}
        </div>

        <h4 className={styles.h4Title}>Others</h4>
        <div className={styles.list}>
          {othersList.map((item) => (
            <Item
              key={item.name}
              name={item.name}
              description={item.description}
              icon={item.icon}
              repo={item.repo}
            />
          ))}
        </div>
        <Cd/>
        <Footer/>
      </div>
    </div>
  )
}

export default Project

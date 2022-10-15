import Footer from "../footer"
import Item from "./item"

import styles from '../../styles/project.module.css'

function Project() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subTitle}>Some of my projects</p>
        <div className={styles.list}>
          <Item
            name={'React Admin System'}
            description={'A full-stack project built with react and koa2'}
            icon='&#xe60a;'
            repo={'https://github.com/lesenelir/meta-react-admin'}
          />
          <Item
            name={'Portfolio'}
            description={'My portfolio blog website built by next.js'}
            icon='&#xe624;'
            repo={'https://github.com/lesenelir/meta-portfolio'}
          />
          <Item
            name={'Flex Baidu'}
            description={'Imitation of Baidu home static page by react'}
            icon='&#xe63f;'
            repo={'https://github.com/lesenelir/meta-baidu'}
          />
          <Item
            name={'Cats Classifier'}
            description={'The classification of four cat-kinds with cnn and Django'}
            icon='&#xe62c;'
            repo={'https://github.com/lesenelir/Django-Cats-Classifier'}
          />
          <Item
            name={'LearnWeb3'}
            description={'Some example practices from LearnWeb3 DAO'}
            icon='&#xe6fd;'
            repo={'https://github.com/lesenelir/meta-learnweb3-dao-projects'}
          />
          <Item
            name={'LeetCode'}
            description={'JavaScript solutions for Personal Leetcode problems'}
            icon='&#xebf2;'
            repo={'https://github.com/lesenelir/meta-leetcode-js'}
          />
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Project

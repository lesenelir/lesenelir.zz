import Footer from "../Layout/footer"
import Item from "./item"
import Cd from "../Utils/cd"

import styles from '../../styles/project.module.css'

function Project(): JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subTitle}>List of my projects</p>

        <h4 className={styles.h4Title}>Front-End</h4>
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
            name={'Mini React'}
            // description={'Build my own mini react'}
            description={'Build mini react by building your own react'}
            icon='&#xe64b;'
            repo={'https://github.com/lesenelir/mini-react'}
          />
        </div>

        <h4 className={styles.h4Title}>Web3</h4>
        <div className={styles.list}>
          <Item
            name={'LearnWeb3'}
            description={'Some example practices from LearnWeb3 DAO'}
            icon='&#xe6fd;'
            repo={'https://github.com/lesenelir/meta-learnweb3-dao-projects'}
          />
        </div>

        <h4 className={styles.h4Title}>Deep Learning</h4>
        <div className={styles.list}>
          <Item
            name={'Cats Classifier'}
            description={'The classification of four cat-kinds with CNN and Django'}
            icon='&#xe62c;'
            repo={'https://github.com/lesenelir/Django-Cats-Classifier'}
          />
        </div>

        <h4 className={styles.h4Title}>Others</h4>
        <div className={styles.list}>
          <Item
            name={'LeetCode'}
            description={'JavaScript solutions for Personal Leetcode problems'}
            icon='&#xebf2;'
            repo={'https://github.com/lesenelir/meta-leetcode-js'}
          />
          <Item
            name={'Javascript Unit Test'}
            description={'Just learn how to write unit test in javascript'}
            icon='&#xe606;'
            repo={'https://github.com/lesenelir/javascript-unit-test'}
          />
        </div>
        <Cd/>
        <Footer/>
      </div>
    </div>
  )
}

export default Project

import Item from "./item"
import Cd from "../cd"
import Footer from "../footer"

import styles from '../../styles/posts.module.css'

interface IPost {
  id: string,
  title: string,
  date: string,
  duration: string
}

interface Props {
  allPosts: IPost[]
}

function Content(props: Props): JSX.Element {
  const {allPosts} = props

  const getPostsByYear = (year: string) => {
    return allPosts.filter(post => post.date.includes(year))
  }

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.year}>2023</p>
        {
          getPostsByYear('2023').map(post => (
            <Item
              id={post.id}
              title={post.title}
              date={post.date}
              duration={post.duration}
              key={post.id}
            />
          ))
        }
        <p className={styles.year}>2022</p>
        {
          getPostsByYear('2022').map(post => (
            <Item
              id={post.id}
              title={post.title}
              date={post.date}
              duration={post.duration}
              key={post.id}
            />
          ))
        }
        <Cd/>
        <Footer/>
      </div>
    </div>
  )
}

export default Content

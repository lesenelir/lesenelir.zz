import Link from "next/link"

import styles from '../../styles/posts.module.css'

function Item(props) {
  const {id, title, date} = props

  return (
    <Link href={`/posts/${id}`}>
      <div className={styles.itemContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </Link>
  )
}

export default Item

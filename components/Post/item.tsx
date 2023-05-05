import Link from "next/link"
import {format, parseISO} from "date-fns"

import styles from '../../styles/posts.module.css'

interface IProps {
  id: string,
  title: string,
  date: string,
  duration: string
}

function Item(props: IProps): JSX.Element {
  const {id, title, date, duration} = props

  return (
    <Link href={`/posts/${id}`}>
      <div className={styles.itemContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{format(parseISO(date), 'MMM d, yyyy')}{' '}{'⋅'}{' '}{duration}</p>
      </div>
    </Link>
  )
}

export default Item

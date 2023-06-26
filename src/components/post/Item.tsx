import Link from "next/link"
import {format, parseISO} from "date-fns"

import {IPost} from "../../libs/types"

interface IProps extends IPost {}

function Item(props: IProps) {
  const {id, title, date, duration} = props

  return (
    <Link href={`/posts/${id}`}>
      <div className={'cursor-pointer my-4 group'}>
        <p className={'group-hover:text-black dark:group-hover:text-white'}>{title}</p>
        <p className={'text-sm text-borderUnderline opacity-60 group-hover:opacity-100'}>
          {format(parseISO(date), 'MMM d, yyyy')}{' '}{'⋅'}{' '}{duration}
        </p>
      </div>
    </Link>
  )
}

export default Item

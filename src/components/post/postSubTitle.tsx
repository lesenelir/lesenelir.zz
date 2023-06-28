import {parseISO, format} from 'date-fns'

interface IProps {
  dateString: string,
  duration: string
}

function PostSubTitle(props: IProps) {
  const {dateString, duration} = props

  const date: Date = parseISO(dateString)

  return (
    <time dateTime={dateString} className={'opacity-70 dark:opacity-60'}>
      {format(date, 'MMM d, yyyy')} {' '}{'⋅'}{' '} {duration}
    </time>
  )
}

export default PostSubTitle

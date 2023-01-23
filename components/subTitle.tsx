import {parseISO, format} from 'date-fns'

interface Props {
  dateString: string,
  duration: string
}

function SubTitle(props: Props): JSX.Element {
  const {dateString, duration} = props

  const date: Date = parseISO(dateString)
  // console.log(dateString) // 2022-12-25
  // console.log(date) // Sun Dec 25 2022 00:00:00 GMT+0800 (China Standard Time)

  return (
    <time dateTime={dateString} style={{opacity: '50%', fontSize: '16px', margin: '10px 0 0 0'}}>
      {format(date, 'MMM d, yyyy')} {' '}{'⋅'}{' '} {duration}
    </time>
  )
}

export default SubTitle

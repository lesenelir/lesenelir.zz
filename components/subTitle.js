import {parseISO, format} from 'date-fns'

function SubTitle(props) {
  const {dateString, duration} = props

  const date = parseISO(dateString)
  console.log(dateString)
  return (
    <time dateTime={dateString} style={{opacity: '50%', fontSize: '16px', margin: '10px 0 0 0'}}>
      {format(date, 'LLLL d, yyyy')} {' '}{'⋅'}{' '} {duration}
    </time>
  )
}

export default SubTitle

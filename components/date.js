import {parseISO, format} from 'date-fns'

function Date({dateString}) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} style={{opacity: '50%', fontSize: '16px', margin: '10px 0 0 0'}}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

export default Date

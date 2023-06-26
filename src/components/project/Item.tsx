interface IProps {
  name: string
  description: string
  icon: string
  repo: string
}

function Item(props: IProps) {
  const {name, description, icon, repo} = props

  return (
    <a
      href={repo}
      rel='noreferrer'
      target='_blank'
    >
      <div className={
        'flex flex-row gap-4 items-center group ' +
        'max-w-xs max-h-32 ' +
        'p-4 rounded-lg hover:bg-borderUnderline hover:bg-opacity-10'
      }>
        <span dangerouslySetInnerHTML={{__html: icon}} className={'font-icon text-3xl group-hover:text-black dark:group-hover:text-white'}/>
        <div>
          <p className={'group-hover:text-black dark:group-hover:text-white'}>{name}</p>
          <p className={
            'text-sm text-borderUnderline opacity-60 ' +
            'group-hover:opacity-100'
          }>{description}</p>
        </div>
      </div>
    </a>
  )
}

export default Item

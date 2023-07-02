import {ReactNode} from "react"

interface IProps {
  href: string
  children: ReactNode
}

function ExternalLink(props: IProps) {
  const {href, children} = props

  return (
    <a
      rel='noreferrer'
      target='_blank'
      href={href}
      className={
        'text-black dark:text-white border-solid border-b-[1px] ' +
        'border-b-borderUnderline border-opacity-30 hover:border-opacity-100 ' +
        'transition-colors duration-300 ease-in ' +
        'dark:border-opacity-50 dark:hover:border-opacity-100'
      }
    >
      {children}
    </a>
  )
}

export default ExternalLink

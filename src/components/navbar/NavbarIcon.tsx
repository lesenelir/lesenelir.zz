import Link from "next/link"
import {ReactNode} from "react"

interface IProps {
  device: string
  href: string
  rel?: string
  target?: string
  children: ReactNode
}

function NavbarIcon(props: IProps) {
  const {device, href, rel, target, children} = props

  if (device === 'mobile') {
    return (
      <Link href={href}>
        <span
          className={
            'font-icon text-xl cursor-pointer opacity-60 ' +
            'sm:hidden max-sm:block ' +
            'hover:text-black hover:opacity-80 ' +
            'dark:hover:text-white dark:hover:opacity-80'
          }
        >{children}</span>
      </Link>
    )
  }

  if (device === 'default') {
    return (
      <Link href={href}>
        <a
          rel={rel}
          target={target}
          className={
            'font-icon text-xl cursor-pointer opacity-60 ' +
            'hover:text-black hover:opacity-80 ' +
            'dark:hover:text-white dark:hover:opacity-80'
          }
        >{children}</a>
      </Link>
    )
  }

  return (
    <Link href={href}>
      <a
        rel={rel}
        target={target}
        className={
          'font-icon text-xl cursor-pointer opacity-60 ' +
          'sm:block max-sm:hidden ' +
          'hover:text-black hover:opacity-80 ' +
          'dark:hover:text-white dark:hover:opacity-80'
        }
      >{children}</a>
    </Link>
  )
}

export default NavbarIcon

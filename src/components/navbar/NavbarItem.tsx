import Link from "next/link"

interface IProps {
  link: string
  name: string
}

function NavbarItem(props: IProps) {
  const {link, name} = props

  return (
    <>
      <Link href={link}>
        <span className={
          'opacity-60 cursor-pointer sm:block max-sm:hidden ' +
          'hover:text-black hover:opacity-80 ' +
          'dark:hover:text-white dark:hover:opacity-80'
        }>
          {name}
        </span>
      </Link>
    </>
  )
}

export default NavbarItem

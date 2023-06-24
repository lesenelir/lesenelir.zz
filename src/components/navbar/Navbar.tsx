import Link from "next/link"
import {useEffect, useState} from "react"
import {useTheme} from "next-themes"

import NavbarItem from "./NavbarItem"
import NavbarIcon from "./NavbarIcon"

interface INavbarItem {
  name: string
  link: string
}

const navbarLists: INavbarItem[] = [
  {name: 'Home', link: '/'},
  {name: 'Posts', link: '/posts'},
  {name: 'Projects', link: '/projects'},
  {name: 'Photos', link: '/photos'},
  {name: 'Timeline', link: '/timeline'},
  {name: 'Message', link: '/message'}
]

function Navbar() {
  const [mounted, setMounted] = useState<boolean>(false)
  const {resolvedTheme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={'flex flex-row justify-between p-8'}>
      <Link href='/'>
        <a className={
          'font-comic text-2xl ' +
          'hover:text-black hover:opacity-80 dark:hover:text-white dark:hover:opacity-80'
        }>Lesenelir</a>
      </Link>

      <nav className={'flex flex-row gap-6 text-navbarLight dark:text-navbarDark'}>
        {/* Mobile Icon + Pad Icon */}
        <NavbarIcon device={'mobile'}  href={'/posts'}>
          &#xe634;
        </NavbarIcon>
        <NavbarIcon device={'mobile'}  href={'/projects'}>
          &#xe617;
        </NavbarIcon>

        {/* PC Icon */}
        {navbarLists.map((item, index) => (
          <NavbarItem key={index} link={item.link} name={item.name}/>
        ))}
        <NavbarIcon device={'pc'} rel={'noreferrer'} target={'_blank'} href={'https://mirror.xyz/lesenelir.eth'}>
          &#xec48;
        </NavbarIcon>
        <NavbarIcon device={'pc'} rel={'noreferrer'} target={'_blank'} href={'https://twitter.com/lesenelir'}>
          &#xe646;
        </NavbarIcon>

        {/* Default Icon + Theme Default Icon */}
        <NavbarIcon device={'default'} rel={'noreferrer'} target={'_blank'} href={'https://github.com/lesenelir'}>
          &#xe799;
        </NavbarIcon>
        {resolvedTheme === 'light' ? (
          <span
            className={
              'font-icon text-xl cursor-pointer opacity-60 ' +
              'hover:text-black hover:opacity-80 ' +
              'dark:hover:text-white dark:hover:opacity-80'
            }
            onClick={() => setTheme('dark')}
          >&#xe642;</span>
        ) : (
          <span
            className={
              'font-icon text-xl cursor-pointer opacity-60 ' +
              'hover:text-black hover:opacity-80 ' +
              'dark:hover:text-white dark:hover:opacity-80'
            }
            onClick={() => setTheme('light')}
          >&#xe781;</span>
        )}
      </nav>
    </div>
  )
}

export default Navbar

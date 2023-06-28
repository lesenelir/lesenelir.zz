import {NextRouter, useRouter} from "next/router"

function Cd() {
  const router: NextRouter = useRouter()

  const handleClick = async () => {
    if (router.pathname === '/posts/[id]') {
      router.back()
    } else {
      await router.push('/')
    }
  }

  return (
    <div className={'cursor-pointer'}>
      <span onClick={handleClick}>
        <span className={'mr-3 font-medium text-borderUnderline opacity-60'}>&gt;</span>
        <a className={
          'text-borderUnderline opacity-60' +
          'border-solid border-b-[1px] border-b-borderUnderline border-opacity-30 dark:border-opacity-60 ' +
          'hover:border-opacity-60 hover:text-black dark:hover:text-white dark:hover:border-opacity-100'
        }>
          cd {' '}.{' '}.
        </a>
      </span>
    </div>
  )
}

export default Cd

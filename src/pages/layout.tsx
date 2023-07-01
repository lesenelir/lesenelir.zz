import {ReactNode} from "react"
import {NextRouter, useRouter} from "next/router"

import Navbar from "../components/navbar/Navbar"
import Plum from "../components/utils/Plum"

interface IProps {
  children: ReactNode
}

function Layout(props: IProps) {
  const {children} = props
  const router: NextRouter = useRouter()

  return (
    <>
      <Navbar/>
      {children}
      {router.pathname !== '/posts/[id]' && <Plum/>}
    </>
  )
}

export default Layout

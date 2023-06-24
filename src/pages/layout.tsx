import {ReactNode} from "react"

import Navbar from "../components/navbar/Navbar"

interface IProps {
  children: ReactNode
}

function Layout(props: IProps) {
  const {children} = props

  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default Layout

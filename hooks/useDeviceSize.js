import {useEffect, useState} from "react";

const useDeviceSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    // setWidth(window.innerWidth)
    // setHeight(window.innerHeight)
    setWidth(window.screen.width)
    setHeight(window.screen.height)
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize)
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return [width, height]
}

export default useDeviceSize

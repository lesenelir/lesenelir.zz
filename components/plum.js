import {useEffect, useRef} from "react"
import {useWindowSize} from "react-use"
import useRafFn from "../hooks/useRafFn"

import styles from '../styles/plum.module.css'

function Plum() {
  const size = useWindowSize()
  const r180 = Math.PI
  const r90 = Math.PI / 2
  const r15 = Math.PI / 12
  const color = '#88888830'

  const { random } = Math

  const start = useRef()
  const init = useRef(4)
  const len = useRef(7)
  const stopped = useRef(false)

  const el = useRef(null)

  const initCanvas = (canvas, width = 400, height = 400) => {
    const ctx = canvas.getContext('2d')

    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    canvas.width = width
    canvas.height = height

    return { ctx }
  };

  const polar2cart = (x = 0, y = 0, r = 0, theta = 0) => {
    const dx = r * Math.cos(theta)
    const dy = r * Math.sin(theta)
    return [x + dx, y + dy]
  };

  let steps = []
  let prevSteps = []
  let iterations = 0

  let lastTime = performance.now()
  const interval = 1000 / 40
  let controls
  const frame = () => {
    if (performance.now() - lastTime < interval) return
    iterations += 1
    prevSteps = steps
    steps = []
    lastTime = performance.now()
    if (!prevSteps.length) {
      controls.pause()
      stopped.current = true
    }
    prevSteps.forEach((i) => i())
  }
  controls = useRafFn(frame)

  const fn = async () => {
    const canvas = el.current
    const { ctx } = initCanvas(canvas, size.width, size.height)
    const { width, height } = canvas

    const step = (x, y, rad) => {
      const length = random() * len.current
      const [nx, ny] = polar2cart(x, y, length, rad)
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(nx, ny)
      ctx.stroke()
      const rad1 = rad + random() * r15
      const rad2 = rad - random() * r15
      if (
        nx < -100 ||
        nx > size.width + 100 ||
        ny < -100 ||
        ny > size.height + 100
      )
        return
      if (iterations <= init.current || random() > 0.5)
        steps.push(() => step(nx, ny, rad1))
      if (iterations <= init.current || random() > 0.5)
        steps.push(() => step(nx, ny, rad2))
    }

    start.current = () => {
      controls.pause()
      iterations = 0
      ctx.clearRect(0, 0, width, height)
      ctx.lineWidth = 1
      ctx.strokeStyle = color
      prevSteps = []
      steps = [
        () => step(random() * size.width, 0, r90),
        () => step(random() * size.width, size.height, -r90),
        () => step(0, random() * size.height, 0),
        () => step(size.width, random() * size.height, r180)
      ]
      if (size.width < 500) steps = steps.slice(0, 2)
      controls.resume()
      stopped.current = false
    }
    start.current()
  }

  useEffect(() => {
    fn()
  }, [])

  return (
    <>
      <canvas ref={el} width={400} height={400} className={styles.container}/>
    </>
  )
}

export default Plum

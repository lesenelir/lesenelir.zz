import {useCallback, useEffect, useRef} from "react"
import {useWindowSize} from "react-use"
import useRafFn from "../../hooks/useRafFn"

import styles from '../../styles/plum.module.css'

interface ISize {
  width: number,
  height: number
}

function Plum(): JSX.Element {
  const size: ISize = useWindowSize()
  const r180: number = Math.PI
  const r90: number = Math.PI / 2
  const r15: number = Math.PI / 12
  const color: '#88888820' = '#88888820'

  const {random} = Math

  const start = useRef<Function>(() => {})
  const init = useRef(4)
  const len = useRef(7)
  const stopped = useRef(false)

  const el = useRef<HTMLCanvasElement>(null)

  const initCanvas = (canvas: HTMLCanvasElement, width = 400, height = 400) => {
    const ctx = canvas.getContext('2d')!

    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    canvas.width = width
    canvas.height = height

    return {ctx}
  }

  const polar2cart = (x = 0, y = 0, r = 0, theta = 0) => {
    const dx = r * Math.cos(theta)
    const dy = r * Math.sin(theta)
    return [x + dx, y + dy]
  }

  let steps: Function[] = []
  let prevSteps: Function[] = []

  let iterations = 0

  let lastTime = performance.now()
  const interval = 1000 / 40

  let controls: ReturnType<typeof useRafFn>

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

  // 定义在useEffect外，需要在useEffect内调用该函数时，需要把函数放入Effect的依赖数组中
  // 如果没有被useCallback包装，每次重新渲染时都会触发Effect，这是不希望看到的情况
  const fn = useCallback(async () => {
    const canvas: HTMLCanvasElement = el.current!
    const {ctx} = initCanvas(canvas, size.width, size.height)
    const {width, height} = canvas

    const step = (x: number, y: number, rad: number) => {
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      iterations = 0
      ctx.clearRect(0, 0, width, height)
      ctx.lineWidth = 1
      ctx.strokeStyle = color
      // eslint-disable-next-line react-hooks/exhaustive-deps
      prevSteps = []
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [])


  useEffect(() => {
    fn().catch(err => console.log(err))
  }, [fn])

  return (
    <>
      <canvas ref={el} width={400} height={400} className={styles.container}/>
    </>
  )
}

export default Plum

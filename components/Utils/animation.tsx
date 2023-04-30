import {useEffect, useRef} from "react"
import useDeviceSize from "../../hooks/useDeviceSize"

import styles from '../../styles/animation.module.css'

function Animation(): JSX.Element {
  const canvasElement = useRef<HTMLCanvasElement>(null)
  const [width, height] = useDeviceSize()

  // useEffect 真实DOM生成后执行
  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasElement.current!
    const ctx = canvas.getContext('2d')
    const pendingTasks = [] // 存放function数组

    // 绘制两个点连线
    const lineTo = (p1, p2) => {
      ctx.strokeStyle = '#88888845'
      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.lineTo(p2.x, p2.y)
      ctx.stroke()
    }

    const getEndPoint = (b) => {
      return {
        x: b.start.x + b.length * Math.cos(b.theta),
        y: b.start.y + b.length * Math.sin(b.theta)
      }
    }

    // 绘制树
    const branchDraw = (branch) => {
      lineTo(branch.start, getEndPoint(branch))
    }

    function step(b, depth = 0) {
      const end = getEndPoint(b)
      branchDraw(b)

      if (depth < 3 || Math.random() < 0.4) {
        pendingTasks.push(() => step({
          start: end,
          length: b.length + (Math.random() * 10 - 5.5),
          theta: b.theta - 0.2 * Math.random()
        }, depth + 1))
      }
      if (depth < 3 || Math.random() < 0.5) {
        pendingTasks.push(() => step({
          start: end,
          length: b.length + (Math.random() * 10 - 6),
          theta: b.theta + 0.2 * Math.random()
        }, depth + 1))
      }
    }

    function frame() {
      const tasks = [...pendingTasks]
      pendingTasks.length = 0
      tasks.forEach(fn => fn())
    }

    // requestAnimationFrame(() => {
    //   frame()
    //   requestAnimationFrame(() => {
    //     frame()
    //   })
    // })
    let framesCount = 0

    function startFrame() {
      requestAnimationFrame(() => {
        framesCount += 1
        if (framesCount % 10 === 0) frame()
        startFrame()
      })
    }

    const initPC = () => {
      step({
        start: {x: 0, y: 0},
        length: 25,
        theta: Math.PI / 6
      })
      step({
        start: {x: width, y: height / 2},
        length: 40,
        theta: Math.PI
      })
      step({
        start: {x: width / 2, y: height},
        length: 40,
        theta: Math.PI / 270
      })
    }

    const initMobile = () => {
      step({
        start: {x: 0, y: 0},
        length: 25,
        theta: Math.PI / 6
      })
      step({
        start: {x: width / 2, y: height},
        length: 40,
        theta: Math.PI / 270
      })
    }


    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      // mobile
      initMobile()
      startFrame()
    } else {
      // pc
      initPC()
      startFrame()
    }
  }, [width, height])

  return (
    <canvas
      ref={canvasElement}
      width={width}
      height={height}
      className={styles.container}
    />
  )
}

export default Animation

import react, { useEffect, useState } from 'react'

const colors = ['#e4b388', '#47a5aa', '#cccccc', '#5c86f9']
const Bg = () => {
  const [index, setIndex] = useState(0)
  const color = colors[index]
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % colors.length)
    }, 1000)
    return () => clearInterval(interval)
  })
  return <div className={'relative h-screen w-screen'} style={{ backgroundColor: color }}></div>
}

export default Bg

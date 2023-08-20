import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount (count + 1)
  }

  return (
    <>
      <button onClick={handleClick}>+Add</button>
   <div>{count}</div>
    </>

  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function plus() {
    setCount(count + 1)
  }

  function minus() {
    if (count > 1) {
      setCount(count - 1)
    }
  }


  return (
    <div className="App">
      <button onClick={plus}>+</button>
      <h1>{count}</h1>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default App

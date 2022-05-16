import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Static from './Component/Static'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Static/>
    </div>
  )
}

export default App

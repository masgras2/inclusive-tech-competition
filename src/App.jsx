import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React Starter Code for Inclusive Tech Competition!</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          This button increases count; count is currently {count}!
        </button>
        <p>
          Edit <code>src/App.jsx</code> and <code>src/App.css</code> to get started!
        </p>
      </div>
    </div>
  )
}

export default App

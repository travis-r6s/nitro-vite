import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Nitro + Vite + React Demo</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is
          {' '}
          {count}
        </button>
      </div>
      <p className="read-the-docs">
        View an example API route below
      </p>
      <br />
      <a href="/api">
        View API Route
      </a>
    </>
  )
}

export default App

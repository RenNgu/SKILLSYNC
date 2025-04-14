import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Vite + React + Tailwind</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <button
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Modal from './modal';

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>React Starter Code for Inclusive Tech Competition!</h1>
      <div>
        <h1>Modal Example</h1>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)} title="Modal Title" description={"This is a description"}/>
        )}
      </div>
    </div>
  )
}

export default App

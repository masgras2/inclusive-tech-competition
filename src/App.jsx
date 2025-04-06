import { useEffect, useState } from 'react'
import './App.css'
import Modal from './modal';

function App() {
  const [opportunities, setOpportunities] = useState([{
      "id": "abcdefg",
      "name": "Opportunity name",
      "field": "Computer Science",
      "type": "scholarship",
      "deadline": "2012-04-23T18:25:43.511Z",
      "shortDescription": "Short description.",
      "description": "Long description blah blah blah"
  }])
  const [shownOpportunities, setShownOpportunities] = useState([{
    "id": "abcdefg",
    "name": "Opportunity name",
    "field": "Computer Science",
    "type": "scholarship",
    "deadline": "2012-04-23T18:25:43.511Z",
    "shortDescription": "Short description.",
    "description": "Long description blah blah blah"
  }])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const toDisplay = opportunities.filter((element) => {
      return element.name.includes(query) || element.field.includes(query) || element.description.includes(query)
    });
    setShownOpportunities(toDisplay)
  }, [opportunities, query, shownOpportunities]);
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <h1>React Starter Code for Inclusive Tech Competition!</h1>
      <div>
        <input htmlFor="search" className="h-10 bg-white border border-gray-300 rounded-xl w-96 px-5" value={query} onChange={(e) => setQuery(e.currentTarget.value)} placeholder="search"/>

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

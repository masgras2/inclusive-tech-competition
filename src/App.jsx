import { useEffect, useState, useEffect } from 'react';
import './App.css';
import OpportunityCard from './OpportunityCard';
import OpportunityData from './example.json';
import Modal from './modal';

function App() {
  // const [opportunities, setOpportunities] = useState([{
  //   "id": "abcdefg",
  //   "name": "Opportunity name",
  //   "field": "Computer Science",
  //   "type": "scholarship",
  //   "deadline": "2012-04-23T18:25:43.511Z",
  //   "shortDescription": "Short description.",
  //   "description": "Long description blah blah blah"
  // }])
  // const [shownOpportunities, setShownOpportunities] = useState([{
  //   "id": "abcdefg",
  //   "name": "Opportunity name",
  //   "field": "Computer Science",
  //   "type": "scholarship",
  //   "deadline": "2012-04-23T18:25:43.511Z",
  //   "shortDescription": "Short description.",
  //   "description": "Long description blah blah blah"
  // }])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const toDisplay = opportunities.filter((element) => {
      return element.name.includes(query) || element.field.includes(query) || element.description.includes(query)
    });
    setShownOpportunities(toDisplay)
  }, [opportunities, query, shownOpportunities]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    setOpportunities(OpportunityData);
  }, []);

  if (opportunities.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <h1>React Starter Code for Inclusive Tech Competition!</h1>
      <div>
        <input htmlFor="search" className="h-4 w-20" value={query} onChange={(e) => setQuery(e.currentTarget.value)} />

        <h1>Modal Example</h1>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)} title="Modal Title" description={"This is a description"} />
        )}

        {opportunities.map(opportunity => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </div>
  );
}

export default App;

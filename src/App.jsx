import { useState, useEffect } from 'react';
import './App.css';
import OpportunityCard from './OpportunityCard';
import OpportunityData from './example.json';  // Assuming you are importing JSON directly.

function App() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    setOpportunities(OpportunityData);
  }, []);

  if (opportunities.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>React Starter Code for Inclusive Tech Competition!</h1>
      <div>
        {opportunities.map(opportunity => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </div>
  );
}

export default App;

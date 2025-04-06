import { useEffect, useState } from 'react';
import './App.css';
import OpportunityCard from './OpportunityCard';
import OpportunityData from './example.json';

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
  const [opportunities, setOpportunities] = useState([
    {
        "id": "1",
        "name": "Joseph S. Murphy Scholarship for Diversity in Labor",
        "field": "Labor",
        "type": "scholarship",
        "deadline": "2025-04-10T18:25:43.511Z",
        "shortDescription": "For high school seniors from African-American, Native American, or underrepresented backgrounds entering labor-related college programs.",
        "amount": "$30,000",
        "tags": [
            "african-american",
            "native-american",
            "underrepresented"
        ],
        "description": "The Joseph S. Murphy Scholarship supports high school seniors from African-American, Latinx, and Native American backgrounds who are entering college programs focused on labor studies, labor leadership, or social justice work."
    },
    {
        "id": "2",
        "name": "Google Lime Scholarship",
        "field": "Computer Science",
        "type": "scholarship",
        "deadline": "2025-05-01T23:59:00.000Z",
        "shortDescription": "For high school seniors with disabilities pursuing computer science degrees in college.",
        "amount": "$10,000",
        "tags": [
            "underrepresented"
        ],
        "description": "The Google Lime Scholarship supports high school seniors with visible or invisible disabilities who are enrolling in computer science, computer engineering, or closely related fields at accredited universities."
    },
    {
        "id": "3",
        "name": "Generation Google Scholarship",
        "field": "Computer Science",
        "type": "scholarship",
        "deadline": "2025-04-25T17:00:00.000Z",
        "shortDescription": "For high school seniors from African-American, Native American, or underrepresented backgrounds pursuing tech degrees.",
        "amount": "$10,000",
        "tags": [
            "african-american",
            "native-american",
            "underrepresented"
        ],
        "description": "The Generation Google Scholarship helps high school seniors from historically underrepresented groups, such as African-American, Hispanic/Latinx, and Native American students, as they begin college studies in computer science and related fields."
    },
    {
        "id": "4",
        "name": "Hispanic Scholarship Fund - STEM Scholarship",
        "field": "STEM",
        "type": "scholarship",
        "deadline": "2025-03-31T23:59:00.000Z",
        "shortDescription": "For high school seniors from Latinx backgrounds entering STEM fields in college.",
        "amount": "$2,500 - $5,000",
        "tags": [
            "underrepresented"
        ],
        "description": "The Hispanic Scholarship Fund (HSF) supports outstanding Latinx high school seniors who plan to major in STEM fields at accredited colleges and universities across the United States."
    },
    {
        "id": "5",
        "name": "American Indian College Fund Full Circle Scholarship",
        "field": "Any Field",
        "type": "scholarship",
        "deadline": "2025-05-31T23:59:00.000Z",
        "shortDescription": "For Native American, American Indian, or tribal high school seniors starting college.",
        "amount": "$1,000 - $10,000",
        "tags": [
            "native-american",
            "american-indian",
            "tribal",
            "indian"
        ],
        "description": "The American Indian College Fund provides scholarships to Native American, American Indian, and tribal high school seniors who are enrolling at tribal colleges, universities, or accredited non-tribal schools."
    },
    {
        "id": "6",
        "name": "UNCF STEM Scholars Program",
        "field": "STEM",
        "type": "scholarship",
        "deadline": "2025-03-19T23:59:00.000Z",
        "shortDescription": "For African-American high school seniors pursuing STEM degrees in college.",
        "amount": "$2,500 per year for 5 years",
        "tags": [
            "african-american",
            "black",
            "underrepresented"
        ],
        "description": "The UNCF STEM Scholars Program helps African-American high school seniors who are committed to earning STEM degrees by providing scholarships, mentoring, and internship opportunities through college."
    },
    {
        "id": "7",
        "name": "Meta Summer Software Engineering Internship (Future College Students)",
        "field": "Computer Science",
        "type": "internship",
        "deadline": "2025-09-15T23:59:00.000Z",
        "shortDescription": "For underrepresented high school seniors planning to major in computer science.",
        "amount": "Paid Internship",
        "tags": [
            "african-american",
            "native-american",
            "black",
            "tribal",
            "underrepresented"
        ],
        "description": "Meta offers a summer internship program for high school seniors from underrepresented backgrounds (especially African-American, Native American, and tribal students) who plan to major in computer science, engineering, or related fields."
    },
    {
        "id": "8",
        "name": "Jackie Robinson Foundation Scholarship",
        "field": "Any Field",
        "type": "scholarship",
        "deadline": "2025-04-15T23:59:00.000Z",
        "shortDescription": "For high school seniors of African-American descent entering college. Aimed at students with leadership potential.",
        "amount": "$30,000",
        "tags": [
            "african-american",
            "underrepresented",
            "black"
        ],
        "description": "The Jackie Robinson Foundation Scholarship provides financial support to high school seniors of African-American descent who show leadership, character, and commitment to community service while planning to attend college."
    },
    {
        "id": "9",
        "name": "AISES Intel Scholarship",
        "field": "STEM",
        "type": "scholarship",
        "deadline": "2025-06-01T23:59:00.000Z",
        "shortDescription": "For Native American, American Indian, and Alaskan Native high school seniors pursuing STEM degrees.",
        "amount": "$10,000",
        "tags": [
            "native-american",
            "american-indian",
            "tribal",
            "indian"
        ],
        "description": "The AISES Intel Scholarship supports high school seniors from Native American, American Indian, and Alaskan Native backgrounds who plan to major in science, technology, engineering, or mathematics (STEM) at an accredited university."
    },
    {
        "id": "10",
        "name": "Coca-Cola Scholars Program",
        "field": "Any Field",
        "type": "scholarship",
        "deadline": "2025-10-31T23:59:00.000Z",
        "shortDescription": "For high school seniors who have demonstrated leadership, service, and academic excellence.",
        "amount": "$20,000",
        "tags": [
            "underrepresented"
        ],
        "description": "The Coca-Cola Scholars Program provides scholarships to high school seniors who have demonstrated leadership, academic excellence, and community service. The program is open to students from all backgrounds, with a focus on diversity."
    },
    {
        "id": "11",
        "name": "National Society of Black Engineers (NSBE) Scholarships",
        "field": "Engineering/Technology",
        "type": "scholarship",
        "deadline": "2025-04-15T23:59:00.000Z",
        "shortDescription": "For African-American high school seniors entering engineering and technology fields.",
        "amount": "$5,000 - $10,000",
        "tags": [
            "african-american",
            "underrepresented",
            "black"
        ],
        "description": "NSBE offers scholarships to African-American high school seniors pursuing degrees in engineering or technology. Students who demonstrate academic excellence and a passion for advancing the field are encouraged to apply."
    },
    {
        "id": "12",
        "name": "Prudential Spirit of Community Awards",
        "field": "Any Field",
        "type": "scholarship",
        "deadline": "2025-11-10T23:59:00.000Z",
        "shortDescription": "For high school seniors who have shown outstanding community service.",
        "amount": "$1,000 and a trip to Washington, D.C.",
        "tags": [
            "underrepresented"
        ],
        "description": "The Prudential Spirit of Community Awards recognizes outstanding young people who have made meaningful contributions to their communities. High school seniors who have demonstrated leadership through community service are eligible for this award."
    },
    {
        "id": "13",
        "name": "Boren Awards for International Study",
        "field": "International Studies",
        "type": "scholarship",
        "deadline": "2025-07-05T23:59:00.000Z",
        "shortDescription": "For high school seniors who wish to study abroad and work on issues of national security and diplomacy.",
        "amount": "$20,000 - $25,000",
        "tags": [
            "underrepresented"
        ],
        "description": "The Boren Awards provide scholarships for high school seniors to study abroad, focusing on areas critical to U.S. national security, including science, technology, and international affairs. This award is designed to encourage underrepresented students in international studies."
    },
    {
        "id": "14",
        "name": "UNCF/Merck Science Initiative Scholarship Program",
        "field": "STEM",
        "type": "scholarship",
        "deadline": "2025-06-30T23:59:00.000Z",
        "shortDescription": "For African-American high school seniors pursuing careers in science, technology, and engineering fields.",
        "amount": "$15,000 and internship opportunities",
        "tags": [
            "african-american",
            "underrepresented",
            "black"
        ],
        "description": "The UNCF/Merck Science Initiative Scholarship Program offers financial support to African-American high school seniors planning to pursue careers in the sciences, particularly in research or biotechnology fields."
    },
    {
        "id": "15",
        "name": "Leaders of Tomorrow Scholarship",
        "field": "Business/Management",
        "type": "scholarship",
        "deadline": "2025-05-15T23:59:00.000Z",
        "shortDescription": "For underrepresented high school seniors planning to major in business, management, or economics.",
        "amount": "$5,000",
        "tags": [
            "underrepresented"
        ],
        "description": "The Leaders of Tomorrow Scholarship supports high school seniors from underrepresented backgrounds pursuing degrees in business, economics, or management."
    },
    {
        "id": "16",
        "name": "Pride Foundation LGBTQ+ Scholarship",
        "field": "Any Field",
        "type": "scholarship",
        "deadline": "2025-06-31T23:59:00.000Z",
        "shortDescription": "For LGBTQ+ high school seniors pursuing higher education.",
        "amount": "$5,000",
        "tags": [
            "underrepresented"
        ],
        "description": "The Pride Foundation LGBTQ+ Scholarship provides financial support for LGBTQ+ high school seniors planning to attend college. It aims to encourage underrepresented students to pursue their dreams in higher education."
    },
    {
        "id": "17",
        "name": "Dell Scholars Program",
        "field": "Any Field",
        "type": "scholarship",
        "deadline": "2025-12-01T23:59:00.000Z",
        "shortDescription": "For high school seniors who demonstrate perseverance and leadership in overcoming personal obstacles.",
        "amount": "$20,000",
        "tags": [
            "underrepresented"
        ],
        "description": "The Dell Scholars Program provides scholarships to high school seniors who have overcome significant personal obstacles and demonstrated the motivation and resilience to succeed in college."
    }
]);
  const [shownOpportunities, setShownOpportunities] = useState([])
  

  useEffect(() => {
    setOpportunities(OpportunityData);
    const toDisplay = opportunities.filter((element) => {
      return element.name.includes(query) || element.field.includes(query) || element.description.includes(query)
    });
    setShownOpportunities(toDisplay)
  }, [opportunities, query, shownOpportunities]);

  // useEffect(() => {
  //   setOpportunities(OpportunityData);
  // }, []);

  if (opportunities.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-[#F8F8FF]">
      <div className="w-full flex flex-col items-center pt-5">
        <input htmlFor="search" className="h-10 bg-white border border-gray-300 rounded-xl w-96 px-5" value={query} onChange={(e) => setQuery(e.currentTarget.value)} placeholder="search" />
        
        {shownOpportunities.map(opportunity => (
          <div key={opportunity.id} className="w-1/2">
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

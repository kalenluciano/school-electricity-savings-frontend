import IncentivesHeader from "./IncentivesHeader"
import Allowance from "./Allowance"
import {useState} from 'react'

const GrantsSection = ({additionalGrants, calculatedSavings, relevantStats}) => {
  const [clicked, setClick] = useState(false)

  const handleClick = (e) => {
    setClick(!clicked)
  }

  return (
    <div>
      {additionalGrants === null ? 
      <IncentivesHeader heading="Additional Funding" subHeading="We couldn&apos;t find any additional funding available for your school district." value="N/A" referencePoint="grants available" handleClick={handleClick}/> : 
      <div>
      <IncentivesHeader heading="Additional Funding" subHeading="Grants you may qualify for" value={additionalGrants.length} referencePoint="grants available" handleClick={handleClick} clicked={clicked}/>
      {clicked &&
      <div className="flex flex-col items-start self-stretch rounded-b-lg py-4 px-8 border-r border-l border-gray-outline border-b rounded-b-lg">
        <p>Based on your location and census data, we think your school qualifies for the below additional funding options.</p>
        <div>
          {additionalGrants.map((allowance, index) => (allowance.status ? <div key={index}>
            <Allowance allowance={allowance} calculatedSavings={calculatedSavings} relevantStats={relevantStats} />
          </div> : null))}
        </div>
        </div>
        }
      </div>
      }
    </div>
  )
}

export default GrantsSection
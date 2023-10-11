import IncentivesHeader from "./IncentivesHeader"
import Allowance from "./Allowance"

const GrantsSection = ({additionalGrants, calculatedSavings, relevantStats}) => {
  return (
    <div>
      {additionalGrants === null ? 
      <IncentivesHeader heading="Additional Funding" subHeading="We couldn’t find any additional funding available for your school district." value="N/A" referencePoint="grants available" /> : 
      <div>
      <IncentivesHeader heading="Additional Funding" subHeading="Grants you may qualify for" value={additionalGrants.length} referencePoint="grants available" />
      <p>Based on your location and census data, we think your school qualifies for the below additional funding options.</p>
      <div>
        {additionalGrants.map((allowance, index) => (allowance.status ? <div key={index}>
          <Allowance allowance={allowance} />
        </div> : null))}
      </div>
      <div>
        <p>Your school likely doesn&apos;t qualify for:</p>
        {additionalGrants.map((allowance, index) => (allowance.status ? null : <div key={index}>
          <Allowance allowance={allowance} />
        </div> ))}
      </div>
      </div>
      }
    </div>
  )
}

export default GrantsSection
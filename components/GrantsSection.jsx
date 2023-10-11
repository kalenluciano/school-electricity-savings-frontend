import IncentivesHeader from "./IncentivesHeader"
import Allowance from "./Allowance"

const GrantsSection = ({additionalGrants, calculatedSavings, relevantStats}) => {
  return (
    <div>
      {additionalGrants === null ? 
      <IncentivesHeader heading="Additional Funding" subHeading="We couldn&apos;t find any additional funding available for your school district." value="N/A" referencePoint="grants available" /> : 
      <div>
      <IncentivesHeader heading="Additional Funding" subHeading="Grants you may qualify for" value={additionalGrants.length} referencePoint="grants available" />
      <p>Based on your location and census data, we think your school qualifies for the below additional funding options.</p>
      <div>
        {additionalGrants.map((allowance, index) => (allowance.status ? <div key={index}>
          <Allowance allowance={allowance} calculatedSavings={calculatedSavings} relevantStats={relevantStats} />
        </div> : null))}
      </div>
      </div>
      }
    </div>
  )
}

export default GrantsSection
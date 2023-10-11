import IncentivesHeader from "./IncentivesHeader"
import IncentivesSubHeader from "./IncentivesSubHeader"
import Allowance from "./Allowance"

const TaxIncentivesSection = ({taxIncentives, calculatedSavings}) => {
  return (
    <div>
      <IncentivesHeader heading={taxIncentives.heading}subHeading={taxIncentives.sub_heading} value={taxIncentives.total_value} referencePoint={taxIncentives.reference_point}/>
      {
        taxIncentives.base_credit === undefined ? 
        <div>{taxIncentives.content}</div> : 
        <div>
          <IncentivesSubHeader heading="Base Credit"
          subHeading={taxIncentives.base_credit.sub_heading}
          value={taxIncentives.base_credit.value}
          referencePoint={taxIncentives.base_credit.reference_point}/>
          <IncentivesSubHeader heading="Additional Credits"
            subHeading={taxIncentives.additional_credits.sub_heading}
            value={taxIncentives.additional_credits.value}
            referencePoint={taxIncentives.additional_credits.reference_point}
          />
          <div>
            {taxIncentives.additional_credits.bonuses.map((allowance, index) => (allowance.status ? <div key={index}>
              <Allowance allowance={allowance} />
            </div> : null))}
          </div>
          <div>
            <p>Your school likely doesn&apos;t qualify for:</p>
            {taxIncentives.additional_credits.bonuses.map((allowance, index) => (allowance.status ? null : <div key={index}>
              <Allowance allowance={allowance} />
            </div> ))}
          </div>
        </div>
      }
    </div>
  )
}

export default TaxIncentivesSection
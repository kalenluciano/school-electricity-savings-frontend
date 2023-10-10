import TaxIncentivesSection from "./TaxIncentivesSection"
import GrantsSection from "./GrantsSection"

const IncentivesTab = ({taxIncentives, additionalGrants, calculatedSavings}) => {
  return (
    <div>
      <TaxIncentivesSection taxIncentives={taxIncentives} calculatedSavings={calculatedSavings} />
      <GrantsSection additionalGrants={additionalGrants} calculatedSavings={calculatedSavings} />
    </div>
  )
}

export default IncentivesTab
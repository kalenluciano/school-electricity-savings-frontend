import TaxIncentivesSection from "./TaxIncentivesSection"
import GrantsSection from "./GrantsSection"

const IncentivesTab = ({taxIncentives, additionalGrants, calculatedSavings, relevantStats}) => {
  return (
    <div>
      <TaxIncentivesSection taxIncentives={taxIncentives} calculatedSavings={calculatedSavings} relevantStats={relevantStats}/>
      <GrantsSection additionalGrants={additionalGrants} calculatedSavings={calculatedSavings} relevantStats={relevantStats} />
    </div>
  )
}

export default IncentivesTab
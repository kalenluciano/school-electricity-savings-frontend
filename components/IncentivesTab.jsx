import TaxIncentivesSection from "./TaxIncentivesSection"
import GrantsSection from "./GrantsSection"

const IncentivesTab = ({taxIncentives, additionalGrants, calculatedSavings, relevantStats, calculating}) => {
  return (
    <div>
      <TaxIncentivesSection taxIncentives={taxIncentives} calculatedSavings={calculatedSavings} relevantStats={relevantStats} calculating={calculating} />
      <GrantsSection additionalGrants={additionalGrants} calculatedSavings={calculatedSavings} relevantStats={relevantStats} />
    </div>
  )
}

export default IncentivesTab
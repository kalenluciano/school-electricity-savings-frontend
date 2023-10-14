import IncentivesHeader from "./IncentivesHeader"
import IncentivesSubHeader from "./IncentivesSubHeader"
import Allowance from "./Allowance"
import {useState, useEffect} from 'react'

const TaxIncentivesSection = ({taxIncentives, calculatedSavings, relevantStats, calculating}) => {
  const [clicked, setClick] = useState(false)
  const [lowIncomeIndianLandStatus, setLowIncomeIndianLandStatus] = useState(false)
  const [energyCommunityStatus, setEnergyCommunityStatus] = useState(false)
  const [noDisqualifications, setNoDisqualifications] = useState(false)

  const checkLowIncomeIndianLandStatus = () => {
    if (relevantStats?.low_income_status || relevantStats?.indian_land_status) {
      setLowIncomeIndianLandStatus(true)
    } else {
      setLowIncomeIndianLandStatus(false)
    }
  }

  const checkEnergyCommunityStatus = () => {
    if (relevantStats?.coal_mine_status || relevantStats?.fossil_fuel_employment_status || relevantStats?.brownfield_site_status) {
      setEnergyCommunityStatus(true)
    } else {
      setEnergyCommunityStatus(false)
    }
  }

  useEffect(() => {
    checkLowIncomeIndianLandStatus()
    checkEnergyCommunityStatus()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [relevantStats, calculating])

  useEffect(() => {
    if (lowIncomeIndianLandStatus && energyCommunityStatus) {
      setNoDisqualifications(true)
    } else {
      setNoDisqualifications(false)
    }
  }, [lowIncomeIndianLandStatus, energyCommunityStatus])

  const handleClick = (e) => {
    setClick(!clicked)
  }

  return (
    <div>
      <IncentivesHeader heading={taxIncentives.heading}subHeading={taxIncentives.sub_heading} value={relevantStats?.total_tax_credit !== undefined ? relevantStats.total_tax_credit + "%" : taxIncentives.total_value} referencePoint={taxIncentives.reference_point} handleClick={handleClick} clicked={clicked}/>
      {taxIncentives.base_credit === undefined ? clicked &&
        <div className="border-r border-l border-gray-outline border-b rounded-b-lg px-8 py-4" >{taxIncentives.content}</div> : clicked &&
        <div className="border-r border-l border-gray-outline border-b rounded-b-lg">
          <IncentivesSubHeader heading="Base Credit"
          subHeading={taxIncentives.base_credit.sub_heading}
          value={taxIncentives.base_credit.value}
          referencePoint={taxIncentives.base_credit.reference_point}/>
          <IncentivesSubHeader heading="Additional Credits"
            subHeading={taxIncentives.additional_credits.sub_heading}
            value={relevantStats?.additional_credit !== undefined ? relevantStats.additional_credit + "%" : taxIncentives.additional_credits.value}
            referencePoint={taxIncentives.additional_credits.reference_point}
          />
          <div className="mb-4 px-4 mx-4 flex flex-col items-start self-stretch rounded-md bg-light-gray">
            <div>
              {taxIncentives.additional_credits.bonuses.map((allowance, index) => ((allowance.status || (allowance.allowance === "low_income_indian_land" && lowIncomeIndianLandStatus) || (allowance.allowance === "energy_community" && energyCommunityStatus)) ? <div key={index}>
                <Allowance allowance={allowance} calculatedSavings={calculatedSavings} relevantStats={relevantStats} />
              </div> : null))}
            </div>
            <div>
              {(relevantStats === null || !noDisqualifications) && <p>Your school likely doesn&apos;t qualify for:</p>}
              {taxIncentives.additional_credits.bonuses.map((allowance, index) => ((!allowance.status && (relevantStats === null || allowance.allowance === "us_material")) || ((allowance.allowance === "low_income_indian_land" && !lowIncomeIndianLandStatus) || (allowance.allowance === "energy_community" && !energyCommunityStatus) ) ? <div key={index}>
                <Allowance allowance={allowance} calculatedSavings={calculatedSavings} relevantStats={relevantStats} /> 
              </div> : null ))}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default TaxIncentivesSection
import Image from "next/image"

const OverviewTab = ({overview, calculatedSavings, relevantStats}) => {
  return (
    <div>
      <p>{overview.intro}</p>
      <div>
        <h3>Average Life Span</h3>
        <p>{overview.life_span}</p>
      </div>
      
      <div>
        <h3>Estimated Tax Credits</h3>
        <p>{relevantStats?.total_tax_credit !== undefined ? relevantStats.total_tax_credit + "%" : overview.tax_credits  }</p>
      </div>

      <div>
        <h3>Additional Grants</h3>
        <p>{relevantStats?.available_grants !== undefined ? relevantStats?.available_grants : overview.grants}</p>
      </div>

      {/* <Image src={overview.image} alt="" width={100} height={100}/> */}

      <div>
        <h3>How does it work?</h3>
        <p>{overview.explanation}</p>
      </div>
    </div>
  )
}

export default OverviewTab
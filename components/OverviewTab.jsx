import Image from "next/image"

const OverviewTab = ({overview, calculatedSavings, relevantStats}) => {
  return (
    <div className="mt-6">
      <div className="flex items-start self-stretch gap-x-10">
        <div className="flex flex-col items-start gap-y-8">
          <p className="self-stretch text-ink-black text-base font-normal">{overview.intro}</p>

          <div className="flex items-start gap-x-6">
            <div>
              <h3 className="text-ink-black font-normal text-base">Average Life Span</h3>
              <p className="text-xl font-semibold text-ink-black">{overview.life_span}</p>
            </div>
            
            <div>
              <h3 className="text-ink-black font-normal text-base">Estimated Tax Credits</h3>
              <p className="text-xl font-semibold text-ink-black">{relevantStats?.total_tax_credit !== undefined ? relevantStats.total_tax_credit + "%" : overview.tax_credits  }</p>
              <p className="text-sm text-dark-gray font-normal">of equipment and installation cost</p>
            </div>

            <div>
              <h3 className="text-ink-black font-normal text-base">Additional Grants</h3>
              <p className="text-xl font-semibold text-ink-black">{relevantStats?.available_grants !== undefined ? relevantStats?.available_grants : overview.grants}</p>
              <p className="text-sm text-dark-gray font-normal">available grants</p>
            </div>
          </div>
        </div>

        <Image src='/assets/header_image.png' alt="" width={280} height={170} className="w-72 h-44 object-contain object-center"/>
      </div>

      <div className="mt-10 flex items-start flex-col self-stretch rounded-lg bg-light-blue p-4 gap-x-2">
        <h3 className="text-base text-ink-black font-medium">How does it work?</h3>
        <p className="text-base text-dark-gray font-normal">{overview.explanation}</p>
      </div>
    </div>
  )
}

export default OverviewTab
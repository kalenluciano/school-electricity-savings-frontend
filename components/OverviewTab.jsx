import Image from "next/image"
import {AiOutlineQuestionCircle} from 'react-icons/ai'

const OverviewTab = ({overview, calculatedSavings, relevantStats}) => {
  return (
    <div className="mt-6">
      <div className="flex items-start self-stretch gap-x-4">
        <div className="flex flex-col items-start gap-y-8">
          <p className="self-stretch text-ink-black text-base font-normal">{overview.intro}</p>

          <div className="flex items-start gap-x-6">
            <div>
              <h3 className="text-ink-black font-normal text-base">Average Life Span</h3>
              <p className="text-xl font-semibold text-ink-black">{overview.life_span}</p>
            </div>
            
            <div>
              <div className="flex items-center gap-x-1 relative">
                <h3 className="text-ink-black font-normal text-base">Estimated Tax Credits</h3>
                <div className="group">
                  <div className="group-hover:block hidden absolute bottom-10 start-36 flex flex-col items-center w-80 py-0.5 px-2 bg-light-blue rounded"><p className="text-sm text-ink-black">We estimated this by mapping your school&apos;s location to census data and IRA&apos;s eligibility requirements.</p><Image src="/assets/triangle.png" alt="A triangle pointing down" width={16} height={8} className="absolute top-[3.875rem] start-4" /></div>
                  <AiOutlineQuestionCircle className="text-ink-black w-3 h-3" />
                </div>
                
              </div>
              <p className="text-xl font-semibold text-ink-black">{relevantStats?.total_tax_credit !== undefined ? relevantStats.total_tax_credit + "%" : overview.tax_credits  }</p>
              <p className="text-sm text-dark-gray font-normal">of equipment and installation cost</p>
            </div>

            <div>
              <div className="flex items-center gap-x-1 relative">
                <h3 className="text-ink-black font-normal text-base">Additional Grants</h3>
                <div className="group">
                  <div className="group-hover:block hidden absolute bottom-10 start-28 flex flex-col items-center w-80 py-0.5 px-2 bg-light-blue rounded"><p className="text-sm text-ink-black">Additional grants were identified from the Inflation Reduction Act (IRA) and the Bipartisan Infrastructure Law (BIL). Note that this may not capture all available funding opportunities. </p><Image src="/assets/triangle.png" alt="A triangle pointing down" width={16} height={8} className="absolute top-[5.125rem] start-4" /></div>
                  <AiOutlineQuestionCircle className="text-ink-black w-3 h-3" />
                </div>
              </div>
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
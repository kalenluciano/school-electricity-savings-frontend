import Image from "next/image";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const IncentivesHeader = ({ heading, subHeading, value, referencePoint, handleClick, clicked }) => (
  <div className={`flex justify-center items-center self-stretch p-4 bg-deep-blue text-white gap-x-4 mt-6 ${!clicked && "rounded-lg"} ${value === "N/A" && "bg-light-gray"} ${clicked && "border-t border-r border-l border-gray-outline rounded-t-lg"} ${value !== "N/A" && "cursor-pointer"}`} onClick={handleClick}>
    <div className="flex justify-between items-center flex-1">
      <div className="flex flex-col items-start gap-y-1">
        <div className="flex items-center gap-x-1 relative">
          <h2 className={`text-base lg:text-xl font-semibold ${value === "N/A" && "text-ink-black"}`}>{heading}</h2>
          {heading === "Total Tax Incentives" && <div className="group">
            <AiOutlineQuestionCircle className="text-white w-4 h-4" />
            <div className="group-hover:block hidden absolute top-0.5 start-56 flex flex-col items-center w-80 py-0.5 px-2 bg-light-blue rounded"><p className="text-sm text-ink-black">We estimated this by mapping your school&apos;s location to census data and IRA&apos;s eligibility requirements.</p><Image src="/assets/sideTriangle.png" alt="A triangle pointing down" width={16} height={8} className="absolute top-1 -start-2" /></div>
          </div>}
        </div>
        <p className={`text-xs lg:text-base ${value === "N/A" && "text-dark-gray"}`}>{subHeading}</p>
      </div>
      <div className="flex flex-col items-end gap-y-1">
        <h2 className={`text-base lg:text-xl font-semibold text-right ${value === "N/A" && "text-ink-black"}`}>{value}</h2>
        <p className={`text-xs lg:text-base text-right ${value === "N/A" && "text-dark-gray"}`}>{referencePoint}</p>
      </div>
    </div>
    {value !== "N/A" && (!clicked ? <Image src="/assets/IoChevronDown.svg" alt="Down arrow icon" width={24} height={24} className="cursor-pointer" /> : <Image src="/assets/IoChevronUp.svg" alt="Up arrow icon" width={24} height={24} className="cursor-pointer" />)}
  </div>
);

export default IncentivesHeader
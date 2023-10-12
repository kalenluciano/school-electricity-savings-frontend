import Image from "next/image";

const IncentivesHeader = ({ heading, subHeading, value,referencePoint, handleClick, clicked }) => (
  <div className={`flex justify-center items-center self-stretch p-4 bg-deep-blue text-white gap-x-4 mt-6 rounded-lg ${value === "N/A" && "bg-light-gray"} ${clicked && "border-t border-r border-l border-gray-outline rounded-t-lg"}`}>
    <div className="flex justify-between items-center flex-1">
      <div className="flex flex-col items-start gap-y-1">
        <h2 className={`text-xl font-semibold ${value === "N/A" && "text-ink-black"}`}>{heading}</h2>
        <p className={`text-base ${value === "N/A" && "text-dark-gray"}`}>{subHeading}</p>
      </div>
      <div className="flex flex-col items-end gap-y-1">
        <h2 className={`text-xl font-semibold text-right ${value === "N/A" && "text-ink-black"}`}>{value}</h2>
        <p className={`text-base text-right ${value === "N/A" && "text-dark-gray"}`}>{referencePoint}</p>
      </div>
    </div>
    {value !== "N/A" && <Image src="/assets/IoChevronDown.svg" alt="Down arrow icon" width={24} height={24} className="cursor-pointer" onClick={handleClick}/>}
  </div>
);

export default IncentivesHeader
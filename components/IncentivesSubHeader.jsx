const IncentivesSubHeader = ({ heading, subHeading, value, referencePoint }) => (
  <div className={`flex justify-between items-start self-stretch py-4 lg:px-8 px-2 gap-y-8 text-ink-black border-gray-outline ${heading !== "Additional Credits" ? "border-b" : "pb-3"}`}>
    <div className="flex flex-col items-start gap-y-1 flex-1">
      <h2 className="text-base lg:text-lg font-semibold">{heading}</h2>
      <p className="text-sm lg:text-base">{subHeading}</p>
    </div>
    <div className="flex flex-col items-end gap-y-1 flex-1 text-right">
      <h2 className="text-base lg:text-lg font-semibold">{value}</h2>
      <p className="text-sm">{referencePoint}</p>
    </div>
  </div>
);

export default IncentivesSubHeader
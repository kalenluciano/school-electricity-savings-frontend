const CostsTab = ({costs, calculatedSavings}) => {
  return (
    <div className="flex flex-col items-start self-stretch rounded-lg bg-light-gray mt-6">

      <div className="p-4 flex justify-between items-center self-stretch">
        <h2 className="font-semibold text-xl text-ink-black">Average Costs</h2>
        <div className="text-right">
          {costs.value.map((value, index) => (
            <div key={index}>
              <p className="font-semibold text-xl text-ink-black">{value}</p>
            </div>
          ))}
          <p className="font-normal text-sm text-ink-black">{costs.reference_point}</p>
        </div>
      </div>
      <div className="bg-gray-outline h-px w-full"></div>
      <div className="p-4 flex flex-col items-start self-stretch gap-y-4">
        <p className="text-base text-dark-gray">{costs.explanation}</p>
        {costs.footers.map((footer, index) => (
          <div key={index}>
            <p className="text-dark-gray text-sm">{footer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CostsTab
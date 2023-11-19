const BenefitsTab = ({ benefits, calculatedSavings }) => {
  return (
    <div className="mt-6">
      <div className="flex flex-col items-start self-stretch gap-y-1 p-4 rounded-lg bg-light-gray mt-2">
        <h3 className="font-semibold text-ink-black text-lg">Financial Benefits</h3>
        <p className="text-dark-gray text-base font-normal">{benefits.financial}</p>
      </div>

      <div className="flex flex-col items-start self-stretch gap-y-1 p-4 rounded-lg bg-light-gray my-6">
        <h3 className="font-semibold text-ink-black text-lg">Environmental Benefits</h3>
        <p className="text-dark-gray text-base font-normal">{benefits.environmental}</p>
      </div>

      <div className="flex flex-col items-start self-stretch gap-y-1 p-4 rounded-lg bg-light-gray">
        <h3 className="font-semibold text-ink-black text-lg">Health and Other Benefits</h3>
        <p className="text-dark-gray text-base font-normal">{benefits.health_other}</p>
      </div>
    </div>
  )
}

export default BenefitsTab
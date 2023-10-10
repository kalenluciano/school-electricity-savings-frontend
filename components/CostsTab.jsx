const CostsTab = ({costs, calculatedSavings}) => {
  return (
    <div>

      <div>
        <div>
        <h2>Average Costs</h2>
        {costs.value.map((value, index) => (
          <div key={index}>
            <p>{value}</p>
          </div>
        ))}
        <p>{costs.reference_point}</p>
        </div>
      </div>

      <div>
        <p>{costs.explanation}</p>
      </div>

      <div>
        {costs.footers.map((footer, index) => (
          <div key={index}>
            <p>{footer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CostsTab
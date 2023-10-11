const IncentivesHeader = ({ heading, subHeading, value,referencePoint }) => (
  <div>
    <div>
      <h2>{heading}</h2>
      <p>{subHeading}</p>
    </div>
    <div>
      <h2>{value}</h2>
      <p>{referencePoint}</p>
    </div>
  </div>
);

export default IncentivesHeader
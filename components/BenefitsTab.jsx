const BenefitsTab = ({benefits, calculatedSavings}) => {
  return (
    <div>
      <h2>Financial Benefits</h2>
      <p>{benefits.financial}</p>

      <h2>Environmental Benefits</h2>
      <p>{benefits.environmental}</p>

      <h2>Health and Other Benefits</h2>
      <p>{benefits.health_other}</p>
    </div>
  )
}

export default BenefitsTab
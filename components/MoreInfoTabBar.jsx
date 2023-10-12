const MoreInfoTabBar = ({setCurrentTab}) => {
  const handleClick = (e) => {
    setCurrentTab(e.target.getAttribute('data'))
  }

  return (
    <div>
      <p data="overview" onClick={handleClick} className="cursor-pointer">Overview</p>
      <p data="incentives" onClick={handleClick} className="cursor-pointer">Incentives</p>
      <p data="costs" onClick={handleClick} className="cursor-pointer">Costs</p>
      <p data="benefits" onClick={handleClick} className="cursor-pointer">Benefits</p>
      <p data="dataSources" onClick={handleClick} className="cursor-pointer">Data Sources</p>
    </div>
  )
}

export default MoreInfoTabBar
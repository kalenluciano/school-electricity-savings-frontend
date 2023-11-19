const MoreInfoTabBar = ({ currentTab, setCurrentTab }) => {
  const handleClick = (e) => {
    setCurrentTab(e.target.getAttribute('data'))
  }

  return (
    <div className="flex items-start self-stretch border-b-2 border-gray-blue overflow-scroll whitespace-nowrap">
      <p data="overview" onClick={handleClick} className={`cursor-pointer ps-4 pe-8 py-1 text-sm font-normal text-dark-gray ${currentTab === "overview" && "font-semibold text-deep-blue border-b-2 border-deep-blue"}`}>Overview</p>
      <p data="incentives" onClick={handleClick} className={`cursor-pointer ps-4 pe-8 py-1 text-sm font-normal text-dark-gray ${currentTab === "incentives" && "font-semibold text-deep-blue border-b-2 border-deep-blue"}`}>Incentives</p>
      <p data="costs" onClick={handleClick} className={`cursor-pointer ps-4 pe-8 py-1 text-sm font-normal text-dark-gray ${currentTab === "costs" && "font-semibold text-deep-blue border-b-2 border-deep-blue"}`}>Costs</p>
      <p data="benefits" onClick={handleClick} className={`cursor-pointer ps-4 pe-8 py-1 text-sm font-normal text-dark-gray ${currentTab === "benefits" && "font-semibold text-deep-blue border-b-2 border-deep-blue"}`}>Benefits</p>
      <p data="dataSources" onClick={handleClick} className={`cursor-pointer ps-4 pe-8 py-1 text-sm font-normal text-dark-gray ${currentTab === "dataSources" && "font-semibold text-deep-blue border-b-2 border-deep-blue"}`}>Data Sources</p>
    </div>
  )
}

export default MoreInfoTabBar
import DataSourcesRow from "./DataSourcesRow"

const DataSourcesTab = ({dataSources, calculatedSavings}) => {
  return (
    <div className="mt-4">
      {dataSources.map((source, index) => (
        <DataSourcesRow key={index} source={source}/>
      ))}
    </div>
  )
}

export default DataSourcesTab
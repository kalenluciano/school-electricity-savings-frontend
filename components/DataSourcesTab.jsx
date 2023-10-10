const DataSourcesTab = ({dataSources, calculatedSavings}) => {
  return (
    <div>
      {dataSources.map((source, index) => (
        <div key={index}>
          <h2>{source.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: source.content }} />
        </div>
      ))}
    </div>
  )
}

export default DataSourcesTab
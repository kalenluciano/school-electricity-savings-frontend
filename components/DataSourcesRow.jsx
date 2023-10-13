import Image from "next/image"
import { useState } from "react"

const DataSourcesRow = ({source}) => {
  const [clicked, toggleClick] = useState(false) 

  const handleClick = (e) => {
    toggleClick(!clicked)
  }
  
  return (
    <div className="rounded-lg bg-light-gray my-2">
      <div className="flex self-stretch justify-between items-center p-4">
        <h3 className="text-lg text-ink-black font-semibold">{source.title}</h3>
        {!clicked ? <Image src="/assets/IoChevronDown.svg" alt="Down arrow icon" width={24} height={24} className="cursor-pointer" onClick={handleClick}/> : <Image src="/assets/IoChevronUp.svg" alt="Up arrow icon" width={24} height={24} className="cursor-pointer" onClick={handleClick}/>}
      </div>
      {clicked && <div >
        <div className="bg-gray-outline h-px w-full"/>
        <div className="p-4 text-sm text-dark-gray data-source-info" dangerouslySetInnerHTML={{ __html: source.content }} /></div>}
    </div>
  )
}

export default DataSourcesRow
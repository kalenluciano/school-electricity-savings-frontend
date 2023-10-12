import SavingsRow from './SavingsRow'
import minimumSavingsInfo from '../data/minimumSavingsInfo.json'

const SavingsTable = ({calculatedSavings, calculated}) => {
    
    return (
        <div className='w-2/4 flex flex-col items-start rounded-lg bg-white shadow-md mb-10 relative min-w-[900px]'>
            <div className='flex flex-col items-start pb-4 pt-8 gap-y-1 rounded-t-lg bg-light-blue w-full px-10'>
                <h3 className='text-lg font-semibold text-ink-black'>School Electrification Incentives</h3>
                {calculated ? 
                <p className='text-dark-gray font-normal text-base'>All the total savings for your school! Click on more info to see what bonuses were added to these totals.</p> : 
                <p className='text-dark-gray font-normal text-base'>All the minimum savings your school is eligible for!</p>}
            </div>

            <div className='flex flex-col items-start w-full'>
                <div className='flex justify-space-between bg-deep-blue text-white px-10 py-3 w-full font-semibold text-base'>
                    <p className='w-3/5'>ITEM</p>
                    <p className='w-1/4'>AMOUNT</p>
                    <div className='w-[15%]'></div>
                </div>

                <div className='w-full'>
                    {minimumSavingsInfo.minimum_savings_info.map((savings) => <div key={savings.id}><SavingsRow savings={savings} calculatedSavings={calculatedSavings}/></div>)}
                </div>
                
            </div>
            
        </div>
        
    )
}

export default SavingsTable
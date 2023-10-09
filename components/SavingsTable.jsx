import SavingsRow from './SavingsRow'
import minimumSavingsInfo from '../data/minimumSavingsInfo.json'

const SavingsTable = ({calculatedSavings, calculated}) => {
    
    return (
        <div className='savings-table-section'>
            <div className='savings-header'>
                <h2>School Electrification Incentives</h2>
                {calculated ? <p>All the total savings for your school! Click on more info to see what bonuses were added to these totals.</p> : <p>All the minimum savings your school is eligible for!</p>}
            </div>

            <div>
                <div className='savings-table-headers'>
                    <h3 className='savings-item'>ITEM</h3>
                    <h3 className='amount'>AMOUNT</h3>
                    <div className='more-info'></div>
                </div>

                <div>
                    {minimumSavingsInfo.minimum_savings_info.map((savings) => <div key={savings.id}><SavingsRow savings={savings} calculatedSavings={calculatedSavings}/></div>)}
                </div>
                
            </div>
            
        </div>
        
    )
}

export default SavingsTable
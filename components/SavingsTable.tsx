import SavingsRow from './SavingsRow'

type SavingsInfoProps = {
    savingsInfo: {
        id: number,
        item: string, 
        description: string,
        amount?: number, 
        createdAt: string,
        updatedAt: string,
        main_savings?: {
            id: number,
            item: string,
            description: string,
            amount?: number,
            createdAt: string,
            updatedAt: string,
        }[]
    }[],
    calculatedSavings: any,
    calculated: boolean
}

type Savings = {
        id: number,
        item: string, 
        description: string,
        amount?: number, 
        createdAt: string,
        updatedAt: string,
        main_savings?: {
            id: number,
            item: string,
            description: string,
            amount?: number,
            createdAt: string,
            updatedAt: string,
        }[]
    }

const SavingsTable: React.FC<SavingsInfoProps> = ({savingsInfo, calculatedSavings, calculated}) => {
    
    return (
        <div className='savings-table-section'>
            <div className='savings-header'>
                <h2>School Electrification Incentives</h2>
                {calculated ? <p>All the total savings for your school! Click on more info to see what bonuses were added to these totals.</p> : <p>All the minimum savings your school is eligible for!</p>}
            </div>

            <div>
                <div className='savings-table-headers'>
                    <h3 className='savings-item'>Item</h3>
                    <h3 className='amount'>Amount</h3>
                    <div className='more-info'></div>
                </div>
                
                { calculated ? <div>{calculatedSavings.savings.map((savings: Savings) => <div key={savings.id}><SavingsRow savings={savings}/></div>)}</div> : <div>{savingsInfo.map((savings) => <div key={savings.id}><SavingsRow savings={savings}/></div>)}</div>}
            </div>
            
        </div>
        
    )
}

export default SavingsTable
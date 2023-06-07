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
        calculated ? <div>{calculatedSavings.savings.map((savings: Savings) => <div key={savings.id}><SavingsRow savings={savings}/></div>)}</div> : <div>{savingsInfo.map((savings) => <div key={savings.id}><SavingsRow savings={savings}/></div>)}</div> 
    )
}

export default SavingsTable
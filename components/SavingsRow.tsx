'use client'

import Link from 'next/link'

type SavingsRow = {
    savings: {id: number,
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
        }[]}
}

const SavingsRow = ({savings}: SavingsRow) => {

    return (
        <div>
            <p>{savings.item}</p>
            <p>{savings.amount ? savings.amount + '%' : 'Varies'}</p>
            <Link href={`/${savings.id}`}>More Info</Link>
        </div>
    )
}

export default SavingsRow
'use client'

import { useState } from "react"

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
    const [clicked, toggleClicked] = useState(false)

    const handleChange = () => {
        toggleClicked(!clicked)
    }

    return (
        <div>
            <p>{savings.item}</p>
            <p>{savings.amount ? savings.amount + '%' : 'Varies'}</p>
            <button onClick={handleChange}>More Info</button>
            {clicked && <div>
                <h1>{savings.item}</h1>
                <h1>{savings.amount ? savings.amount + '%' : 'Varies'}</h1>
                <p>{savings.description}</p>
                {savings.main_savings?.map((bonus) => (
                    <div key={bonus.id}>
                        <h1>{bonus.item}</h1>
                        <h1>{bonus.amount}</h1>
                        <p>{bonus.description}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default SavingsRow
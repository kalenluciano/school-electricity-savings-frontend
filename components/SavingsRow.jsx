'use client'

import { useState } from "react"



const SavingsRow = ({savings}) => {
    const [clicked, toggleClicked] = useState(false)

    const handleChange = () => {
        toggleClicked(!clicked)
    }

    return (
        <div className="savings-row">
            <p className="savings-item">{savings.item}</p>
            <p className="amount">{savings.amount ? savings.amount + '%' : 'Varies'}</p>
            <button className="more-info more-info-button" onClick={handleChange}>More Info</button>
            {clicked && <div className="savings-more-info-section">
                <p className="savings-description">{savings.description}</p>
                {savings.main_savings?.map((bonus) => (
                    <div key={bonus.id} className="savings-row">
                        <p className="savings-item">{bonus.item}</p>
                        <p className="amount">{bonus.amount + '%'}</p>
                        <p className="more-info"></p>
                        <p className="savings-description">{bonus.description}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default SavingsRow
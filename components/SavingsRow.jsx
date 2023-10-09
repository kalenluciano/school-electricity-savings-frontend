'use client'

import { useState } from "react"
import { Button } from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'

const SavingsRow = ({savings, calculatedSavings}) => {
    const [clicked, toggleClicked] = useState(false)

    const handleChange = () => {
        toggleClicked(!clicked)
    }

    return (
        <div className="savings-row">
            <p className="savings-item">{savings.item}</p>
            <p className="amount">{savings.amount}</p>
            <Button className="more-info more-info-button savings-row-more-info-button" onClick={handleChange} size={"sm"} variant={"outline"} colorScheme="gray" rightIcon={<BsChevronDown/>}>More info</Button>
            {/* {clicked && <div className="savings-more-info-section">
                <p className="savings-description">{savings.description}</p>
                {savings.main_savings?.map((bonus) => (
                    <div key={bonus.id} className="savings-row">
                        <p className="savings-item">{bonus.item}</p>
                        <p className="amount">{bonus.amount + '%'}</p>
                        <p className="more-info"></p>
                        <p className="savings-description">{bonus.description}</p>
                    </div>
                ))}
            </div>} */}
        </div>
    )
}

export default SavingsRow
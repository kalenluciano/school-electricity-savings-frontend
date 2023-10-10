'use client'

import { useState } from "react"
import { Button } from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'
import OverviewTab from "./OverviewTab"
import IncentivesTab from "./IncentivesTab"
import CostsTab from "./CostsTab"
import BenefitsTab from "./BenefitsTab"
import DataSourcesTab from "./DataSourcesTab"

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
            {clicked && <div className="savings-more-info-section">
                <OverviewTab savings={savings} calculatedSavings={calculatedSavings} />
                <IncentivesTab savings={savings} calculatedSavings={calculatedSavings} />
                <CostsTab savings={savings} calculatedSavings={calculatedSavings} />
                <BenefitsTab savings={savings} calculatedSavings={calculatedSavings}/>
                <DataSourcesTab savings={savings} calculatedSavings={calculatedSavings} />
            </div>}
        </div>
    )
}

export default SavingsRow
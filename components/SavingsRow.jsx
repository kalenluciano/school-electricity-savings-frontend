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
    let relevantStats = null
    
    switch (savings.item) {
        case "Solar Panel Installation":
            relevantStats = calculatedSavings?.SolarGeoBatteryStat ?? null
            break;
        case "Battery Storage Installation":
            relevantStats = calculatedSavings?.SolarGeoBatteryStat ?? null
            break;
        case "Electric Vehicles":
            relevantStats = calculatedSavings?.ElectricVehicleStat ?? null
            break;
        case "Electric Vehicle Charger Installation":
            relevantStats = calculatedSavings?.EVChargerStat ?? null
            break;
        case "Building Energy Efficiency":
            relevantStats = null
            break;
        case "Geothermal Heating Installation":
            relevantStats = calculatedSavings?.SolarGeoBatteryStat ?? null
            break;
        default:
            relevantStats = null
            break;
    }

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
                <OverviewTab overview={savings.overview} calculatedSavings={calculatedSavings} relevantStats={relevantStats} />
                <IncentivesTab taxIncentives={savings.tax_incentives} additionalGrants={savings.additional_grants} calculatedSavings={calculatedSavings} relevantStats={relevantStats} />
                <CostsTab costs={savings.costs} calculatedSavings={calculatedSavings} />
                <BenefitsTab benefits={savings.benefits} calculatedSavings={calculatedSavings}/>
                <DataSourcesTab dataSources={savings.data_sources} calculatedSavings={calculatedSavings} />
            </div>}
        </div>
    )
}

export default SavingsRow
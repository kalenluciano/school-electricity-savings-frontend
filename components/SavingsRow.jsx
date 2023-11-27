'use client'

import { useState, useEffect } from "react"
import { Button } from '@chakra-ui/react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import OverviewTab from "./OverviewTab"
import IncentivesTab from "./IncentivesTab"
import CostsTab from "./CostsTab"
import BenefitsTab from "./BenefitsTab"
import DataSourcesTab from "./DataSourcesTab"
import MoreInfoTabBar from "./MoreInfoTabBar"

const SavingsRow = ({ savings, calculatedSavings, calculating, currentRow, handleChange, currentTab, setCurrentTab }) => {
    const [isWideScreen, setIsWideScreen] = useState(true);

    let relevantStats = null
    let savingsImageSrc = null

    switch (savings.item) {
        case "Solar Panel Installation":
            relevantStats = calculatedSavings?.SolarGeoBatteryStat ?? null
            savingsImageSrc = '/assets/Solar_Panels.jpg'
            break;
        case "Battery Storage Installation":
            relevantStats = calculatedSavings?.SolarGeoBatteryStat ?? null
            savingsImageSrc = '/assets/Battery_Storage.jpg'
            break;
        case "Electric Vehicles":
            relevantStats = calculatedSavings?.ElectricVehicleStat ?? null
            savingsImageSrc = '/assets/Electric_Vehicles.jpg'
            break;
        case "Electric Vehicle Charger Installation":
            relevantStats = calculatedSavings?.EVChargerStat ?? null
            savingsImageSrc = '/assets/Electric_Vehicle_Charger.jpg'
            break;
        case "Building Energy Efficiency":
            relevantStats = null
            savingsImageSrc = '/assets/Building_Efficiency.jpg'
            break;
        case "Geothermal Heating Installation":
            relevantStats = calculatedSavings?.SolarGeoBatteryStat ?? null
            savingsImageSrc = '/assets/Geothermal_Heat_Pump.jpg'
            break;
        default:
            relevantStats = null
            break;
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsWideScreen(true);
            } else {
                setIsWideScreen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`${currentRow === savings.item && "border-b border-gray-outline shadow-md"}`}>
            <div onClick={() => handleChange(savings.item)} className={`flex items-center justify-space-between flex-wrap py-3 lg:px-8 px-4 cursor-pointer border-b border-solid border-gray-outline hover:bg-light-gray duration-300 ease-in-out ${currentRow === savings.item && "bg-light-gray"}`}>
                <p className="w-2/5 font-normal lg:text-base text-sm text-ink-black px-2">{savings.item}</p>
                <p className="w-2/5 font-semibold lg:text-base text-sm text-ink-black px-2">{relevantStats?.total_tax_credit !== undefined ? relevantStats?.total_tax_credit + "%" : savings.amount}</p>
                {isWideScreen ?
                    <Button className="bg-gray-blue text-dark-gray" size={"sm"} colorScheme='gray' variant={"outline"} rightIcon={currentRow !== savings.item ? <BsChevronDown /> : <BsChevronUp />}>More info</Button> :
                    <Button className="bg-gray-blue text-dark-gray" size={"sm"} colorScheme='gray' variant={"outline"}>{currentRow !== savings.item ? <BsChevronDown /> : <BsChevronUp />}</Button>
                }
            </div>

            {currentRow === savings.item && <div className="w-full px-4 lg:px-8 pt-4 pb-8">
                <MoreInfoTabBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
                {currentTab === "overview" && <OverviewTab overview={savings.overview} calculatedSavings={calculatedSavings} relevantStats={relevantStats} savingsImageSrc={savingsImageSrc} isWideScreen={isWideScreen} />}
                {currentTab === "incentives" && <IncentivesTab taxIncentives={savings.tax_incentives} additionalGrants={savings.additional_grants} calculatedSavings={calculatedSavings} relevantStats={relevantStats} calculating={calculating} />}
                {currentTab === "costs" && <CostsTab costs={savings.costs} calculatedSavings={calculatedSavings} />}
                {currentTab === "benefits" && <BenefitsTab benefits={savings.benefits} calculatedSavings={calculatedSavings} />}
                {currentTab === "dataSources" && <DataSourcesTab dataSources={savings.data_sources} calculatedSavings={calculatedSavings} />}
            </div>}
        </div>
    )
}

export default SavingsRow
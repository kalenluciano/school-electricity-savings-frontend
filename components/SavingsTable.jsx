'use client'

import SavingsRow from './SavingsRow'
import minimumSavingsInfo from '../data/minimumSavingsInfo.json'
import { useState } from "react"

const SavingsTable = ({ calculatedSavings, calculated, calculating }) => {
    const [currentRow, setCurrentRow] = useState('')
    const [currentTab, setCurrentTab] = useState('overview')

    const handleChange = (savingsItem) => {
        setCurrentTab('overview')
        if (savingsItem === currentRow) {
            setCurrentRow("")
        }
        else {
            setCurrentRow(savingsItem)
        }
    }

    return (
        <div className='w-11/12 flex flex-col items-start rounded-lg bg-white shadow-md mb-10 relative lg:w-2/4'>
            <div className='flex flex-col items-start pb-4 pt-8 gap-y-1 rounded-t-lg bg-light-blue w-full lg:px-10 px-4'>
                <h3 className='text-lg font-semibold text-ink-black'>School Electrification Incentives</h3>
                {calculated ?
                    <p className='text-dark-gray font-normal text-base'>All the total savings for your school! Click on more info to see what bonuses were added to these totals.</p> :
                    <p className='text-dark-gray font-normal text-base'>All the minimum savings your school is eligible for!</p>}
            </div>

            <div className='flex flex-col items-start w-full'>
                <div className='flex justify-space-between bg-deep-blue text-white lg:px-10 px-4 py-3 w-full font-semibold lg:text-base text-sm'>
                    <p className='w-3/5'>ITEM</p>
                    <p className='w-1/4'>AMOUNT</p>
                    <div className='w-[15%]'></div>
                </div>

                <div className='w-full'>
                    {minimumSavingsInfo.minimum_savings_info.map((savings) => <div key={savings.id}><SavingsRow savings={savings} calculatedSavings={calculatedSavings} calculating={calculating} currentRow={currentRow} handleChange={handleChange} currentTab={currentTab} setCurrentTab={setCurrentTab} /></div>)}
                </div>

            </div>

        </div>

    )
}

export default SavingsTable
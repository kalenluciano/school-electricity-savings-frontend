'use client'

import { useState } from "react"
import Image from "next/image"

const FAQ = () => {
    const [clicked, setClicked] = useState(false)

    const handleChange = (e) => {
        setClicked(!clicked)
    }

    return (
        <div className="faq">
            <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <button className="more-info-button" onClick={handleChange}><Image src="/assets/AccordionIcon.svg" alt="Down arrow icon" width={24} height={24}/></button>
            </div>
            {clicked && <div className="faq-info">
                <h3>What is the Inflation Reduction Act and how does it help decarbonize schools?</h3> 
                <p>The Inflation Reduction Act (IRA) is a federal law passed in 2022 that provides $369 billion in climate and energy incentives to address the climate crisis. It has the potential to reduce carbon emissions by approximately 40% by 2030. The IRA provides opportunities for schools to use tax credits to transition to clean energy and transportation. It also allows schools to utilize tax deductions through a third-party to support energy efficiency.</p>
                <h3>What is Direct Pay (Elective Pay)?</h3>
                <p>The Inflation Reduction Act has expanded incentives that enable tax-exempt entities, such as schools, states, local, and Tribes governments, to be eligible for direct pay or transfer of credit. Direct Pay allows schools directly benefit from the credit and receive the eligible amount as a cash payment directly from the IRS. Previously, to access credits non-taxable entities had to rely on third-parties with tax liability to claim the credit and pass along a portion of the savings by reducing the costs for schools.</p>
                <h3>Why does the address of a school affect its savings?</h3>
                <p>While all schools can utilize some incentives, the IRA provides bonus tax credits and deductions for schools in certain areas, such as in low-income communities or energy communities. For example, if a school is in a low-income neighborhood, it may be eligible for an additional 10% tax credit for some projects. The specific qualifications are ever-evolving because the Environmental Protection Agency (EPA) and the Internal Revenue Service (IRS) are still developing this guidance.</p>
                <h3>How accurate is this information?</h3>
                <p>The information in this guide is based on guidance reported by the EPA and IRS as of May 2023. We use data from the Census, EPA, the Bureau of Labor Statistics, the National Center for Education Statistics, and other government entities to determine whether a school meets each of the additional tax credit qualifications. While this data is as accurate as possible, some of the qualifications are complicated and the guidance is still being developed. Schools should consult the official guidelines and seek professional advice to ensure that the information is accurate and that the school meets each of the eligibility requirements for a given incentive.</p>
                </div>
            }
        </div>
    )
}

export default FAQ
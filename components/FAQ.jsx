'use client'

import { useState } from "react"

const FAQ = () => {
    const [clicked, setClicked] = useState(false)

    const handleChange = (e) => {
        setClicked(!clicked)
    }

    return (
        <div className="faq">
            <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <button className="more-info-button" onClick={handleChange}>More Info</button>
            </div>
            {clicked && <div className="faq-info">
                <h3>What is the Inflation Reduction Act and how does it help decarbonize schools?</h3> 
                <p>The Inflation Reduction Act (IRA) is a federal law that provides many incentives to address the climate crisis by promoting investments in clean energy. It has the potential to reduce carbon emissions by approximately 40% by 2030. The IRA provides opportunities for schools to use tax credits to transition to clean energy and transporation. It also allows schools to utilize tax deductions through a third-party to support energy efficiency.</p>
                <h3>Why does the address of a school affect its savings?</h3>
                <p>While all schools can utilize some incentives, the IRA provides bonus tax credits and deductions for schools in certain areas, such as in low-income communities or energy communities. For example, if a school is in a low-income neighborhood, it may be eligible for an additional 10% tax credit for some projects. A school can meet the energy community qualification based on a few different factors, including whether a coal mine recently closed nearby, if fossil fuel employment makes up a certain percentage of a metropolitan area and unemployment is high, or if there is a brownfield site nearby. The specific qualifications are ever-evolving because the Environmental Protection Agency (EPA) and the Internal Revenue Service (IRS) are still developing this guidance.</p>
                <h3>How accurate is this information?</h3>
                <p>This information in this guide is based on guidance reported by the EPA and IRS as of May 2023. We use data from the Census, EPA, and the Bureau of Labor Statistics to determine whether a school meets each of the additional tax credit qualifications. While this data is as accurate as possible, some of the qualifications are complicated and the guidance is still being developed. Schools should consult the official guidelines and seek professional advice to ensure that the information is accurate and that the school meets each of the eligibility requirements for a given incentive.</p>
                </div>
            }
        </div>
    )
}

export default FAQ
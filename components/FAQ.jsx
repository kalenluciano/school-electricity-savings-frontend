'use client'

import { useState } from "react"
import Image from "next/image"
import faqInfo from '@/data/faqInfo.json'

const FAQ = () => {
    const [clicked, setClicked] = useState(false)

    const handleChange = (e) => {
        setClicked(!clicked)
    }

    return (
        <div className="w-11/12 flex flex-col items-center rounded-lg border border-white bg-white shadow-md my-10 relative lg:w-2/4">
            <div onClick={handleChange} className="flex justify-between w-full py-8 px-10 cursor-pointer">
                <h3 className="text-ink-black text-lg font-semibold">Frequently Asked Questions</h3>
                <button className="more-info-button">{!clicked ? <Image src="/assets/AccordionIcon.svg" alt="Down arrow icon" width={24} height={24} className="text-ink-black" /> : <Image src="/assets/AccordionUpIcon.svg" alt="Up arrow icon" width={24} height={24} className="text-ink-black" />}</button>
            </div>
            {clicked &&
                <div>
                    <div className="w-full h-px bg-gray-outline absolute inset-x-0"></div>
                    <div className="py-4 px-10">
                        {faqInfo.map((faq, index) => (<div key={index} className="py-4 flex flex-col items-start gap-y-2.5">
                            <h4 className="text-base text-ink-black font-semibold">{faq.question}</h4>
                            <p className="text-base leading-5 font-normal text-dark-gray">{faq.answer}</p>
                        </div>))}
                    </div>
                </div>
            }
        </div>
    )
}

export default FAQ
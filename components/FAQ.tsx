'use client'

import { useState } from "react"

const FAQ = () => {
    const [clicked, setClicked] = useState(false)

    const handleChange = (e: any) => {
        setClicked(!clicked)
    }

    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            <button onClick={handleChange}>Click</button>
            {clicked && <div>
                <h3>Question</h3> 
                <p>Answer</p>
                <h3>Question</h3>
                <p>Answer</p>
                </div>
            }
        </div>
    )
}

export default FAQ
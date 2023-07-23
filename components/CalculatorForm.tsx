'use client'

import React, { useState, useEffect, useRef } from "react"
import axios from 'axios'
import {BASE_URL} from '../src/globals'

type CalculatorFormProps = {
    setCalculatedSavings: React.Dispatch<React.SetStateAction<any>>,
    toggleCalculated: React.Dispatch<React.SetStateAction<any>>,
    toggleCalculating: React.Dispatch<React.SetStateAction<any>>
}

// interface FormValues {
//     streetAddress: string,
//     city: string,
//     state: string,
//     zipCode: string
// }

const CalculatorForm = ({ setCalculatedSavings, toggleCalculated, toggleCalculating } : CalculatorFormProps) => {
    const autoCompleteRef = useRef("")
    const inputRef = useRef("")
    const options = {
        componentRestrictions: { country: "us" },
        fields: ['formatted address', 'geometry', 'name']
    }
    
    // const initialFormValues = {
    //     streetAddress: "",
    //     city: "",
    //     state: "",
    //     zipCode: ""
    // }

    // const [formValues, setFormValues] = useState<FormValues>(initialFormValues)

    // const handleChange = (e: any) => {
    //     setFormValues({...formValues, [e.target.name]: e.target.value.replaceAll(" ", "+")})
    // }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        toggleCalculating(true)
        const result = {data: []}
        // const result = await axios.get(`${BASE_URL}/address/${formValues.streetAddress}/${formValues.city}/${formValues.state}/${formValues.zipCode}`)
        setCalculatedSavings(result.data)
        toggleCalculating(false)
        toggleCalculated(Object.keys(result.data).length > 0)
    }
    
    return (
        <div className="calculator-form">
        <h2>Enter your school&apos;s information</h2>
        {/* <form onSubmit={handleSubmit}>
            <label htmlFor="streetAddress">Street Address</label>
            <input onChange={handleChange} name="streetAddress" placeholder="633 Clark St" required/>
            <label htmlFor="city">City</label>
            <input onChange={handleChange} name="city" placeholder="Evanston" required />
            <label htmlFor="state">State</label>
            <input onChange={handleChange} name="state" placeholder="IL" required />
            <label htmlFor="zipCode">Zip Code</label>
            <input onChange={handleChange} name="zipCode" placeholder="60208" required />
            <button className="search-button">Search</button>
        </form> */}
        </div>
    )
}

export default CalculatorForm
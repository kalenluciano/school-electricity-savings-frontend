'use client'

import { useState, useEffect } from "react"
import axios from 'axios'
import {BASE_URL} from '../globals'

type CalculatorFormProps = {
    savingsInfo?: {
        id: number,
        item: string, 
        description: string,
        amount?: number, 
        createdAt: string,
        updatedAt: string,
        main_savings?: {
            id: number,
            item: string,
            description: string,
            amount: number,
            createdAt: string,
            updatedAt: string,
        }[]
    },
    setSavingsInfo: React.Dispatch<React.SetStateAction<any>>
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({savingsInfo, setSavingsInfo}) => {
    const initialFormValues = {
        streetAddress: "",
        city: "",
        state: "",
        zipCode: ""
    }

    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e: any) => {
        setFormValues({...formValues, [e.target.name]: e.target.value.replaceAll(" ", "+")})
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(formValues)
        const result = await axios.get(`${BASE_URL}/address/${formValues.streetAddress}/${formValues.city}/${formValues.state}/${formValues.zipCode}`)
        console.log(result)
    }
    
    return (
        <div>
        <h2>Enter your school&apos;s information</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="streetAddress">Street Address</label>
            <input onChange={handleChange} name="streetAddress" placeholder="633 Clark St" />
            <label htmlFor="city">City</label>
            <input onChange={handleChange} name="city" placeholder="Evanston" />
            <label htmlFor="state">State</label>
            <input onChange={handleChange} name="state" placeholder="IL" />
            <label htmlFor="zipCode">Zip Code</label>
            <input onChange={handleChange} name="zipCode" placeholder="60208" />
            <button>Search</button>
        </form>
        </div>
    )
}

export default CalculatorForm
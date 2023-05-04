'use client'

import { useState } from "react"
import axios from 'axios'
import {BASE_URL} from '../globals'

export default function CalculatorForm() {
    const initialFormValues = {
        streetAddress: "",
        city: "",
        state: "",
        zipCode: ""
    }

    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e: any) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const result = await axios.get(`${BASE_URL}/address/${formValues.streetAddress}/${formValues.city}/${formValues.state}/${formValues.zipCode}`)
        console.log(result)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="streetAddress"></label>
            <input onChange={handleChange} name="streetAddress" placeholder="633 Clark St" />
            <label htmlFor="city"></label>
            <input onChange={handleChange} name="city" placeholder="Evanston" />
            <label htmlFor="state"></label>
            <input onChange={handleChange} name="state" placeholder="IL" />
            <label htmlFor="zipCode"></label>
            <input onChange={handleChange} name="zipCode" placeholder="60208" />
            <button>Search</button>
        </form>
    )
}
'use client'

import { useState } from "react"
import axios from 'axios'
import {BASE_URL} from '../globals'

export default function CalculatorForm() {
    const initialFormValues = {
        street_address: "",
        street_address_2: "",
        city: "",
        state: "",
        zip_code: ""
    }

    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e: any) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        await axios.get(`${BASE_URL}/`)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="street_address"></label>
            <input onChange={handleChange} name="street_address" placeholder="633 Clark St" />
            <label htmlFor="street_address_2"></label>
            <input onChange={handleChange} name="street_address_2" placeholder="Apt 1" />
            <label htmlFor="city"></label>
            <input onChange={handleChange} name="city" placeholder="Evanston" />
            <label htmlFor="state"></label>
            <input onChange={handleChange} name="state" placeholder="IL" />
            <label htmlFor="zip_code"></label>
            <input onChange={handleChange} name="zip_code" placeholder="60208" />
            <button>Search</button>
        </form>
    )
}
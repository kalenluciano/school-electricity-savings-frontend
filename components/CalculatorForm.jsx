'use client'

import React, { useState } from "react"
import axios from 'axios'
import {BASE_URL} from '../globals'
import Autocomplete from "react-google-autocomplete";

const CalculatorForm = ({ setCalculatedSavings, toggleCalculated, toggleCalculating }) => {
    const [address, setAddress] = useState("");
    const [coordinatesLat, setCoordinatesLat] = useState("")
    const [coordinatesLng, setCoordinatesLng] = useState("")

    const handlePlaceSelected = async (place) => {
        setAddress(place.formatted_address.replaceAll(' ', '%20').replaceAll(',', '%2C'));
        if (place.geometry.location) {
            setCoordinatesLat(place.geometry.location.lat)
            setCoordinatesLng(place.geometry.location.lng)
        }
    }

    const handleInputChange = (e) => {
        setAddress(e.target.value.replaceAll(' ', '%20'));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        toggleCalculating(true)
        const result = await axios.get(`${BASE_URL}/address/${address}/${coordinatesLat}/${coordinatesLng}`)
        setCalculatedSavings(result.data)
        toggleCalculating(false)
        toggleCalculated(Object.keys(result.data).length > 0)
    }
    
    return (
        <div className="calculator-form">
        <h2>Enter your school&apos;s information</h2>
        <form onSubmit={handleSubmit}>
            <Autocomplete
                apiKey={process.env.NEXT_PUBLIC_API_KEY_GOOGLE}
                onPlaceSelected={handlePlaceSelected}
                onChange={handleInputChange}
                placeholder="Enter your school's address"
                options={{
                    types: ['address'],
                    fields: ['formatted_address', 'geometry']
                }}
            />
            <button className="search-button">Search</button>
        </form>
        </div>
    )
}

export default CalculatorForm
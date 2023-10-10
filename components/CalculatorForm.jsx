'use client'

import React, { useState } from "react"
import axios from 'axios'
import {BASE_URL} from '../globals'
import Autocomplete from "react-google-autocomplete";
import { Button } from '@chakra-ui/react'
import BsLightningFill from 'public/assets/BsLightningFill.jsx'

const CalculatorForm = ({ setCalculatedSavings, toggleCalculated, toggleCalculating }) => {
    const [address, setAddress] = useState("");
    const [coordinatesLat, setCoordinatesLat] = useState("%20")
    const [coordinatesLng, setCoordinatesLng] = useState("%20")

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
            <label htmlFor="address">Street address</label>
            <Autocomplete
                apiKey={process.env.NEXT_PUBLIC_API_KEY_GOOGLE}
                onPlaceSelected={handlePlaceSelected}
                onChange={handleInputChange}
                placeholder="Start typing your school&apos;s address..."
                options={{
                    types: ['address'],
                    fields: ['formatted_address', 'geometry']
                }}
            />
            <Button className="search-button" colorScheme="gray" size="lg" variant='solid' leftIcon={false} rightIcon={<BsLightningFill/>}>CALCULATE</Button>
        </form>
        </div>
    )
}

export default CalculatorForm
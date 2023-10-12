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
    const [placeSelected, togglePlaceSelected] = useState(false)

    const handlePlaceSelected = async (place) => {
        if (place && place.formatted_address) {
            setAddress(place.formatted_address.replaceAll(' ', '%20').replaceAll(',', '%2C'));
            togglePlaceSelected(true)
            if (place.geometry.location) {
                setCoordinatesLat(place.geometry.location.lat)
                setCoordinatesLng(place.geometry.location.lng)
            }
        }
        
    }

    const handleInputChange = (e) => {
        setAddress(e.target.value.replaceAll(' ', '%20'));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (address !== "" && placeSelected) {
            toggleCalculating(true)
            const result = await axios.get(`${BASE_URL}/address/${address}/${coordinatesLat}/${coordinatesLng}`)
            setCalculatedSavings(result.data)
            toggleCalculating(false)
            toggleCalculated(Object.keys(result.data).length > 0)
        }
    }
    
    return (
        <div className="w-2/4 h-64 py-8 px-10 flex flex-col justify-center items-center rounded-lg border border-white bg-white shadow-md min-w-[900px]">
        <div className="mb-4 flex flex-col items-start w-full">
            <h3 className="mb-4 text-lg text-ink-black font-semibold">Enter your school&apos;s information</h3>
            <form className="mt-4 flex flex-col items-start w-full" onSubmit={handleSubmit} >
                <label htmlFor="address" className="text-dark-gray font-normal text-base">Street address</label>
                <Autocomplete className="px-3 rounded border border-gray-400 bg-white mt-2 w-full h-10 flex flex-col items-center justify-center text-gray-500"
                    apiKey={process.env.NEXT_PUBLIC_API_KEY_GOOGLE}
                    onPlaceSelected={handlePlaceSelected}
                    onChange={handleInputChange}
                    placeholder="Start typing your school&apos;s address..."
                    options={{
                        types: ['address'],
                        fields: ['formatted_address', 'geometry']
                    }}
                />
            </form>
        </div>
        <Button className="search-button mt-5 rounded-lg bg-vibrant-green shadow-md p-4 px-6 text-white hover:bg-dark-green" colorScheme="gray" size="lg" variant='solid' leftIcon={false} rightIcon={<BsLightningFill/>}  onClick={handleSubmit}>CALCULATE</Button>
        </div>
    )
}

export default CalculatorForm
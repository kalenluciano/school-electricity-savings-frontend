'use client'

import React, { useState, useEffect } from "react"
import axios from 'axios'
import { BASE_URL } from '../globals'
import Autocomplete from "react-google-autocomplete";
import { Button } from '@chakra-ui/react'
import BsLightningFill from 'public/assets/BsLightningFill.jsx'
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const CalculatorForm = ({ setCalculatedSavings, toggleCalculated, toggleCalculating, calculating }) => {
    const [address, setAddress] = useState("");
    const [coordinatesLat, setCoordinatesLat] = useState("%20")
    const [coordinatesLng, setCoordinatesLng] = useState("%20")
    const [placeSelected, togglePlaceSelected] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);

    const loadingText = ["Gathering census data...", "Checking what you qualify for...", "Adding up your tax savings..."]

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

    const rotateLoadingText = () => {
        const nextIndex = (currentIndex + 1) % loadingText.length;
        setCurrentIndex(nextIndex);
    };

    useEffect(() => {
        let intervalId;

        if (calculating) {
            intervalId = setInterval(() => {
                rotateLoadingText();
            }, 1500);
        } else {
            setCurrentIndex(0)
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId)
        }
    }, [calculating, currentIndex]);

    return (
        <div className="w-11/12 h-fit py-8 px-10 flex flex-col justify-center items-center rounded-lg border border-white bg-white shadow-md lg:w-2/4 lg:h-fit">
            <div className="mb-4 flex flex-col items-start w-full">
                <h3 className="mb-4 text-lg text-ink-black font-semibold">Enter your school&apos;s information to find out which federal incentives it qualifies for.</h3>
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
            {calculating ?
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <div className="h-24 w-24 border-8 border-vibrant-green rounded-full flex justify-center items-center">
                        <BsLightningFill width={48} height={48} color="#09AB36" />
                    </div>
                    <p className="text-dark-green">{loadingText[currentIndex]}</p>
                    <HiOutlineChevronDoubleDown color="#09AB36" className="h-6 w-6" />
                </div> :
                <Button className="search-button mt-5 rounded-lg bg-vibrant-green shadow-md p-4 px-6 text-white hover:bg-dark-green" colorScheme="gray" size="lg" variant='solid' leftIcon={false} rightIcon={<BsLightningFill width={16} height={17} color={"white"} />} onClick={handleSubmit}>CALCULATE</Button>}
        </div>
    )
}

export default CalculatorForm
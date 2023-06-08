'use client'

import CalculatorForm from "../../components/CalculatorForm"
import FAQ from "../../components/FAQ"
import SavingsTable from "../../components/SavingsTable"
import { useState, useEffect } from "react"
import axios from "axios"
import {BASE_URL} from '../globals'

type SavingsInfo = {
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
    amount?: number,
    createdAt: string,
    updatedAt: string,
  }[],
}[]

export default function Home() {
  const [savingsInfo, setSavingsInfo] = useState<SavingsInfo>([])
  const [calculatedSavings, setCalculatedSavings] = useState({})
  const [calculated, toggleCalculated] = useState(false)

  const getInitialSavings = async () => {
    const result = await axios.get(`${BASE_URL}/savings`)
    setSavingsInfo(result.data)
  }

  useEffect(() => {
    getInitialSavings()
  }, [])

  return (
    <main>
      <div className="header">
        <h2>Clean Energy Savings Calculator for Schools</h2>
        <h1>How much money can your school save with the Inflation Reduction Act?</h1>
      </div>
      <div className="content">
        <CalculatorForm setCalculatedSavings={setCalculatedSavings} toggleCalculated={toggleCalculated}/>
        <FAQ />
        <SavingsTable savingsInfo={savingsInfo} calculatedSavings={calculatedSavings} calculated={calculated}/>
      </div>
    </main>
  )
}

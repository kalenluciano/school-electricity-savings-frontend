'use client'

import CalculatorForm from "@/components/CalculatorForm"
import FAQ from "@/components/FAQ"
import SavingsInfo from "@/components/SavingsInfo"
import { useState, useEffect } from "react"

interface SavingsInfo {
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
  }[],
}

export default function Home() {
  const [savingsInfo, setSavingsInfo] = useState<SavingsInfo>({
    id: 0,
    item: "",
    description: '',
    createdAt: "",
    updatedAt: ""
  })

  const getInitialSavings = async () => {

  }

  useEffect(() => {
    getInitialSavings()
  }, [])

  return (
    <main>
      <h2>School Savings Calculator</h2>
      <h1>How much money can your school save with the Inflation Reduction Act?</h1>
      <CalculatorForm savingsInfo={savingsInfo} setSavingsInfo={setSavingsInfo}/>
      <FAQ />
      <h2>School Electrification Incentives</h2>
      <p>All the savings your school may be eligible for!</p>
      <SavingsInfo />
    </main>
  )
}

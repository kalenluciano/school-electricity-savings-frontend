'use client';

import CalculatorForm from '../components/CalculatorForm';
import FAQ from '../components/FAQ';
import SavingsTable from '../components/SavingsTable';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals';
import Image from 'next/image';

export default function Home() {
	const [calculatedSavings, setCalculatedSavings] = useState(null);
	const [calculated, toggleCalculated] = useState(false);
	const [calculating, toggleCalculating] = useState(false);

	return (
		<main>
			<div className="header">
				<Image
					src="/assets/rewiring_education_logo.png"
					alt="A green electrical plug and lightning bolt"
					width={100}
					height={100}
				/>
				<h1>REWIRING EDUCATION</h1>
				<h2>
					How much money can your school save with the Inflation Reduction Act?
				</h2>
			</div>
			<div className="content">
				<CalculatorForm
					setCalculatedSavings={setCalculatedSavings}
					toggleCalculated={toggleCalculated}
					toggleCalculating={toggleCalculating}
				/>
				<FAQ />
				<SavingsTable
					calculatedSavings={calculatedSavings}
					calculated={calculated}
					calculating={calculating}
				/>
			</div>
		</main>
	);
}

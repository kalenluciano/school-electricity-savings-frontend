'use client';

import Header from '@/components/Header';
import CalculatorForm from '../components/CalculatorForm';
import FAQ from '../components/FAQ';
import SavingsTable from '../components/SavingsTable';
import { useState } from 'react';

export default function Home() {
	const [calculatedSavings, setCalculatedSavings] = useState(null);
	const [calculated, toggleCalculated] = useState(false);
	const [calculating, toggleCalculating] = useState(false);

	return (
		<main>
			<div className="w-screen h-5 bg-vibrant-green"></div>
			<Header />
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

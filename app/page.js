'use client';

import Header from '@/components/Header';
import CalculatorForm from '../components/CalculatorForm';
import FAQ from '../components/FAQ';
import SavingsTable from '../components/SavingsTable';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Home() {
	const [calculatedSavings, setCalculatedSavings] = useState(null);
	const [calculated, toggleCalculated] = useState(false);
	const [calculating, toggleCalculating] = useState(false);

	return (
		<main className="bg-light-gray">
			<div className="w-screen h-5 bg-vibrant-green"></div>
			<Header />
			<div className="flex flex-col flex-wrap justify-center items-center">
				<CalculatorForm
					setCalculatedSavings={setCalculatedSavings}
					toggleCalculated={toggleCalculated}
					toggleCalculating={toggleCalculating}
					calculating={calculating}
				/>
				<FAQ />
				<SavingsTable
					calculatedSavings={calculatedSavings}
					calculated={calculated}
					calculating={calculating}
				/>
			</div>
			<Footer />
		</main>
	);
}

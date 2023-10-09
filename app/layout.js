import '../styles/tailwind.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'School Electricity Savings Calculator',
	description:
		'A tool to calculate savings for school districts converting to electricity',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

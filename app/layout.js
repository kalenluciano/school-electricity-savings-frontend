import '../styles/tailwind.css';
import { Public_Sans } from 'next/font/google';
import { Providers } from './providers';
import { GoogleAnalytics } from '@next/third-parties/google'

const publicSans = Public_Sans({ subsets: ['latin'] });

export const metadata = {
	title: 'Electrifying Education',
	description:
		'A tool to calculate savings for school districts converting to electricity',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={publicSans.className}>
				<Providers>{children}</Providers>
			</body>
			<GoogleAnalytics gaId="G-PT1CJ97LZ7" />
		</html>
	);
}

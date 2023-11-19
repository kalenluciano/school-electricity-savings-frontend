import { ChakraProvider } from '@chakra-ui/react';
import { Public_Sans } from '@next/font/google';

const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-public-sans' });

function MyApp({ Component, pageProps }) {
	return (
		<main className={`${publicSans.variable} font-sans`}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</main>
	);
}

export default MyApp;

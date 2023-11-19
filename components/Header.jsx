import Image from 'next/image';

const Header = () => {
	return (
		<header className='flex flex-col justify-center items-center mt-24 mb-10'>
			<Image
				src="/assets/header_image.png"
				alt="A green electrical plug and lightning bolt"
				width={1000}
				height={500}
				className='w-2/4 lg:w-1/3 h-fit'
				priority
			/>
			<h3 className='text-md text-dark-gray lg:text-lg mt-2 font-semibold text-center px-5'>
				How much money can your school save with the Inflation Reduction Act?
			</h3>
		</header>
	)
}

export default Header
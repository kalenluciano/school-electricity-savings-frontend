import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex flex-col justify-center items-center mt-24 mb-10'>
				<Image
					src="/assets/header_image.png"
					alt="A green electrical plug and lightning bolt"
					width={1000}
					height={500}
					className='w-1/3 h-fit'
				/>
				<h2 className='text-dark-gray text-lg mt-2'>
					How much money can your school save with the Inflation Reduction Act?
				</h2>
    </header>
  )
}

export default Header
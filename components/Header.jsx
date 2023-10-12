import Image from 'next/image';

const Header = () => {
  return (
    <header>
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
    </header>
  )
}

export default Header
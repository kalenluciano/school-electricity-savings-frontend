import Requirement from "./Requirement";
import Image from "next/image";

const Allowance = ({ allowance, calculatedSavings, relevantStats }) => {
  let allowanceStatus = allowance.status
  let allowanceValue = allowance.status ? allowance.value : '0%';

  let allowanceContent;

  switch (allowance.allowance) {
    case 'low_income_indian_land':
      allowanceContent = (
        <p><strong>Low-Income or Indian Land Bonus:</strong> Projects located in a low-income community or on Indian Land can earn an additional tax credit of 10% added to the base tax credit. A location qualifies for this additional credit if it meets <u>one</u> of the following requirements:</p>
      );
      if (relevantStats?.low_income_status === true || relevantStats?.indian_land_status === true) {
        allowanceStatus = true
        allowanceValue = "10%"
      }
      break;
    case 'energy_community':
      allowanceContent = (
        <p><strong>Energy Community Bonus:</strong> Projects located in an energy community can earn an additional tax credit of 10% added to the base tax credit. A location is considered an energy community if it meets <u>one</u> of the following requirements:</p>
      );
      if (relevantStats?.coal_mine_status === true || relevantStats?.fossil_fuel_employment_status === true || relevantStats?.brownfield_site_status === true) {
        allowanceStatus = true
        allowanceValue = "10%"
      }
      break;
    case 'us_material':
      allowanceContent = (
        <p><strong>US Material Bonus:</strong> Projects that use materials including iron and steel that are produced in the United States can earn an additional tax credit of 10% added to the base tax credit.</p>
      );
      break;
    case 'clean_heavy_duty_vehicles':
      allowanceContent = (
        <p><strong><a href='https://www.epa.gov/inflation-reduction-act/clean-heavy-duty-vehicle-program' target='_blank' rel='noopener noreferrer'>Clean Heavy-Duty Vehicles Program:</a></strong> All schools can apply for this competitive grant funding to replace diesel school buses with electric school buses. Funding can be used for purchasing, installing, operating, and maintaining infrastructure needed to charge or maintain electric school buses. The funds can also be used for workforce development and training as well as planning technical assistance activities to support the adoption and deployment of electric school buses.</p>
      );
      break;
    case 'clean_school_bus':
      allowanceContent = (
        <p><strong><a href='https://www.epa.gov/cleanschoolbus/clean-school-bus-program-grants' target='_blank' rel='noopener noreferrer'>EPA Clean School Bus Program:</a></strong> All schools can apply for funding from this program to help transition to zero-emission school buses, with $500 million available per fiscal year for the next 5 years. Priority will be given to schools leveraging additional funding opportunities as well as:</p>
      );
      break;
    case 'support_for_state_energy_programs':
      allowanceContent = (
        <p><strong><a href='https://www.energy.gov/scep/state-energy-program-0' target='_blank' rel='noopener noreferrer'>Support for State Energy Programs and Reducing Transportation Emissions Program:</a></strong> Under this program, the federal government will distribute $500 million to all 50 states (and D.C.) based on a distribution formula. The funds can be used by State Energy Offices to develop and implement clean energy programs and projects. State energy plans include programs to reduce carbon emissions in the transportation sector and accelerate the use of alternative transportation fuels, including the electrification of school buses.</p>
      );
      break;
    case 'national_electric_vehicle_formula':
      allowanceContent = (
        <p><strong><a href='https://afdc.energy.gov/laws/12744' target='_blank' rel='noopener noreferrer'>National Electric Vehicle Formula Program:</a></strong>Under this program, the federal government will distribute $5 billion to all 50 states (and D.C.) based on a distribution formula. The funds can be used by State Departments of Transportation to deploy electric vehicle charging infrastructure, including at or near schools, which can support the use of electric school buses and electric passenger vehicles. Priority will be given to projects in rural, underserved, and disadvantaged communities, but each state must develop its own plan to identify and support these communities.</p>
      );
      break;
    default:
      allowanceContent = null
      break
  }

  return (
    <div>
      <div className="flex justify-between self-stretch gap-x-3 lg:gap-x-6 my-3">
        {allowanceStatus ? <Image src="/assets/FiCheckSquare.svg" alt="Green square with a check mark" width={24} height={24} className="w-6 h-6" /> : <Image src="/assets/FiXSquare.svg" alt="Red square with an X mark" width={24} height={24} className="w-6 h-6" />}
        <div className="allowance-content">{allowanceContent}</div>
        <p className="text-ink-black font-medium">{allowanceValue}</p>
      </div>
      <div className="flex flex-col items-start self-stretch px-5 lg:px-10">
        {allowance.requirements.map((requirement, index) => (
          <Requirement key={index} requirement={requirement} calculatedSavings={calculatedSavings} relevantStats={relevantStats} />
        ))}
      </div>
    </div>

  );
};

export default Allowance;

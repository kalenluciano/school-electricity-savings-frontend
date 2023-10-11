import {FiCheck, FiX} from "react-icons/fi"

const Requirement = ({requirement}) => {

  let requirementContent

  switch (requirement.requirement) {
    case "low_income":
      requirementContent = (
        <p><strong>Low-Income requirement:</strong> Your school is in a census tract where the poverty rate is less than the required 20% to qualify for this bonus. Your school is also in a census tract with a family median income that&apos;s greater than 80% of the family median income of its metropolitan area and its state, meeting none of the eligibility requirements for the low-income bonus.
        </p>
      )
      break;
    case "indian_land":
      requirementContent = (
        <p><strong>Indian Land requirement:</strong> Your school is not on American Indian land according to this calculator. However, this calculator may not capture all the nuances of this requirement. It&apos;s best to consult with an expert to confirm the status of the Indian Land bonus for a project.</p>
      )
      break;
    case "coal_mine":
      requirementContent = (
        <p><strong>Coal mine requirement:</strong> Your school is not near a coal mine that either shut down after 1999 or a coal-fired electric generating unit that retired after 2009.</p>
      )
      break;
    case "fossil_fuel_employment":
      requirementContent = (
        <p><strong>Fossil fuel employment requirement:</strong> Your school is not in a metropolitan statistical area (MSA) or non-MSA with a 0.17% or greater direct fossil fuel employment. MSAs/non-MSAs that meet the direct fossil fuel employment requirement must also have an unemployment rate that is greater than the national average unemployment rate in 2021 of 5.8% to qualify.
        </p>
      )
      break;
    case "brownfield_site":
      requirementContent = (
        <p><strong>Brownfield site requirement:</strong> Your school is not on or near a brownfield site. The guidelines to determine whether a school is close enough to a brownfield site to qualify for this requirement are still in development. It&apos;s best to consult with an expert to confirm the school&apos;s eligibility for the brownfield site requirement.
        </p>
      )
      break;
    case "poor_air_quality":
      requirementContent = (
        <p><strong>Poor air-quality (nonattainment) areas:</strong> The program sets aside 40% of all the funding for projects in communities with poor air quality. Your school is not in a community with poor air quality, making it less likely for your school to access these funds. 
        </p>
      )
      break;
    case "high_need_schools":
      requirementContent = (
        <p><strong>High-need schools or schools in low-income areas:</strong> School districts that have 20% or more students living in poverty or receive Title I funds are defined as high-need schools. Schools located in the U.S. Virgin Islands, Guam, American Samoa, and the Commonwealth of the Northern Mariana Islands are also defined as high-need schools. Your school is not considered a high-need school by these metrics. However, your school can self-certify for priority status if they are not represented in the dataset and received a Title I grant during the 2021-2022 school year. School districts can also self-certify if they have more than 35,000 students or more than 45 schools and 80% or more of the schools in the district received a Title I grant. Sub-groups of schools in large districts can receive prioritization if they all received Title I grants. According to the EPA&apos;s data, your school district is not eligible to self-certify.
        </p>
      )
      break;
    case "rural_schools":
      requirementContent = (
        <p><strong>Rural schools:</strong> School districts that are identified with locale code “43-Rural: Remote” by the National Center for Education Statistics (NCES) are given priority for grant funding. Your school is not in a rural area, according to this metric.
        </p>
      )
      break;
    case "bureau_funded_schools":
      requirementContent = (
        <p><strong>Bureau of Indian Affairs-funded schools:</strong> School districts that receive funding from the Bureau of Indian Affairs are given priority for this program. Your school is not a Bureau-funded school.
        </p>
      )
      break;
    case "schools_with_children_on_indian_land":
      requirementContent = (
        <p><strong>Schools serving children who reside on Indian land:</strong> School districts that receive basic support payments for children who reside on Indian land are given priority under this program. Your school is not on Indian land.
        </p>
      )
      break;
    case "disadvantaged_communities":
      requirementContent = (
        <p><strong>Disadvantaged communities:</strong> While each state can develop their own plan for prioritizing disadvantaged communities, the federal government developed the Electric Vehicle (EV) Charging Justice40 Map Tool in the interim for defining and identifying disadvantaged communities. Your school is not in a disadvantaged community according to this tool, decreasing its priority status.
        </p>
      )
      break;
    default:
      requirementContent = null
      break;
  }

  return (
    <div>
      {requirement.status ? <FiCheck className="text-green-600"/> : <FiX className="text-red-600" />}
      {requirementContent}
    </div>
  )
}

export default Requirement
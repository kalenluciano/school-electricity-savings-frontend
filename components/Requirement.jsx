import {FiCheck, FiX} from "react-icons/fi"

const Requirement = ({requirement, calculatedSavings, relevantStats}) => {
  let requirementStatus = requirement.status
  let requirementContent

  switch (requirement.requirement) {
    case "low_income":
      if (calculatedSavings === null) {
        requirementContent = (
          <p><strong>Low-Income requirement:</strong> Your school is in a census tract where the poverty rate is less than the required 20% to qualify for this bonus. Your school is also in a census tract with a family median income that&apos;s greater than 80% of the family median income of its metropolitan area and its state, meeting none of the eligibility requirements for the low-income bonus.
          </p>
          )
      } else if (parseFloat(relevantStats?.census_tract_poverty_rate) >= 20) {
        requirementContent = (
          <p><strong>Low-Income requirement:</strong> Your school is in a census tract where the poverty rate is {relevantStats?.census_tract_poverty_rate}%, which is more than the required 20% to qualify for this bonus. Schools in a census tract with a family median income that&apos;s 80% or less than the family median income of its metropolitan area or its state can also qualify for the low-income bonus.</p>
        )
        requirementStatus = true
      } else if (relevantStats?.low_income_status === true) {
        requirementContent = (
          <p><strong>Low-Income requirement:</strong>Your school is in a census tract where the poverty rate is {relevantStats?.census_tract_poverty_rate}%, which is less than the required 20% to qualify for this bonus. However, your school is in a census tract with a family median income that&apos;s 80% or less than the family median income of its metropolitan area or its state, meeting the eligibility requirement for the low-income bonus.</p>
        )
        requirementStatus = true
      } else {
        requirementContent = (
          <p><strong>Low-Income requirement:</strong>Your school is in a census tract where the poverty rate is {relevantStats?.census_tract_poverty_rate}%, which is less than the required 20% to qualify for this bonus. Your school is also in a census tract with a family median income that&apos;s greater than 80% of the family median income of its metropolitan area and its state, meeting none of the eligibility requirements for the low-income bonus.</p>
        )
      }
      break;
    case "indian_land":
      if (calculatedSavings === null) {
        requirementContent = (
          <p><strong>Indian Land requirement:</strong> Your school is not on American Indian land according to this calculator. However, this calculator may not capture all the nuances of this requirement. It&apos;s best to consult with an expert to confirm the status of the Indian Land bonus for a project.</p>
        )
      } else if (relevantStats?.indian_land_status === true) {
        let land = ""
        if (relevantStats?.federal_american_indian_reservation === true) {
          land = "a Federal American Indian reservation"
        } else if (relevantStats?.off_reservation_trust_land === true) {
          land = "a federally recognized off-reservation trust land"
        } else if (relevantStats?.alaska_native_village === true) {
          land = "land owned by a American Indian Tribe and conveyed by the United States to a Native Corporation pursuant to the Alaska Native Claims Settlement Act"
        } else if (relevantStats?.majority_tribe_members === true) {
          land = "a census tract where the majority of residents are enrolled members of a federally recognized Tribe"
        }
        requirementContent = (
          <p><strong>Indian Land requirement:</strong> Your school is within the boundaries of {land}. This calculator may not capture all the nuances of this requirement. It&apos;s best to consult with an expert to confirm the status of the Indian Land bonus for a project.</p>
        )
        requirementStatus = true
      } else {
        requirementContent = (
          <p><strong>Indian Land requirement:</strong> Your school is not on American Indian land according to this calculator. However, this calculator may not capture all the nuances of this requirement. It&apos;s best to consult with an expert to confirm the status of the Indian Land bonus for a project.</p>
        )
      }
      break;
    case "coal_mine":
      requirementContent = (
        <p><strong>Coal mine requirement:</strong> Your school {relevantStats?.coal_mine_status === true ? "is" : "is not"} near a coal mine that either shut down after 1999 or a coal-fired electric generating unit that retired after 2009.</p>
      )
      if (relevantStats?.coal_mine_status === true) {
        requirementStatus = true
      }
      break;
    case "fossil_fuel_employment":
      if (relevantStats?.fossil_fuel_employment_status === true) {
        requirementContent = (
          <p><strong>Fossil fuel employment requirement:</strong> Your school is in the {relevantStats?.msa_non_msa_name} metropolitan statistical area (MSA)/non-metropolitan statistical area (non-MSA), which has a 0.17% or greater direct fossil fuel employment. The {relevantStats?.msa_non_msa_name} MSA/non-MSA also had a {relevantStats?.msa_non_msa_unemployment_rate}% unemployment rate in 2022, which is greater than the national average unemployment rate in 2021 of 5.8%, meeting this requirement.
          </p>
        )
        requirementStatus = true
      } else if (relevantStats?.fossil_fuel_employment_status === false && relevantStats?.msa_non_msa_unemployment_rate !== undefined) {
        requirementContent = (
          <p><strong>Fossil fuel employment requirement:</strong> Your school is in the {relevantStats?.msa_non_msa_name} metropolitan statistical area (MSA)/non-metropolitan statistical area (non-MSA), which has a 0.17% or greater direct fossil fuel employment. However, the {relevantStats?.msa_non_msa_name} MSA/non-MSA had a {relevantStats?.msa_non_msa_unemployment_rate}% unemployment rate in 2022, which is less than the national average unemployment rate in 2021 of 5.8%. The lower unemployment rate disqualifies your school from meeting this requirement.
          </p>
        )
      } else {
        requirementContent = (
          <p><strong>Fossil fuel employment requirement:</strong> Your school is not in a metropolitan statistical area (MSA) or non-MSA with a 0.17% or greater direct fossil fuel employment. MSAs/non-MSAs that meet the direct fossil fuel employment requirement must also have an unemployment rate that is greater than the national average unemployment rate in 2021 of 5.8% to qualify.
          </p>
        )
      }
      break;
    case "brownfield_site":
      requirementContent = (
        <p><strong>Brownfield site requirement:</strong> Your school {relevantStats?.brownfield_site_status === true ? "is" : "is not"} on or near a brownfield site. The guidelines to determine whether a school is close enough to a brownfield site to qualify for this requirement are still in development. It&apos;s best to consult with an expert to confirm the school&apos;s eligibility for the brownfield site requirement.
        </p>
      )
      if (relevantStats?.brownfield_site_status === true) {
        requirementStatus = true
      }
      break;
    case "poor_air_quality":
      requirementContent = (
        <p><strong>Poor air-quality (nonattainment) areas:</strong> The program sets aside 40% of all the funding for projects in communities with poor air quality. Your school {relevantStats?.poor_air_quality_area === true ? "is" : "is not"} in a community with poor air quality, making it {relevantStats?.poor_air_quality_area === true ? "more" : "less"} likely for your school to access these funds. 
        </p>
      )
      if (relevantStats?.poor_air_quality_area === true) {
        requirementStatus = true
      }
      break;
    case "high_need_schools":
      if (relevantStats?.high_need_school === true) {
        requirementContent = (
          <p><strong>High-need schools or schools in low-income areas:</strong> School districts that have 20% or more students living in poverty or receive Title I funds are defined as high-need schools. Schools located in the U.S. Virgin Islands, Guam, American Samoa, and the Commonwealth of the Northern Mariana Islands are also defined as high-need schools. Your school is considered a high-need school by these metrics. 
        </p>
        )
        requirementStatus = true
      } else {
      requirementContent = (
        <p><strong>High-need schools or schools in low-income areas:</strong> School districts that have 20% or more students living in poverty or receive Title I funds are defined as high-need schools. Schools located in the U.S. Virgin Islands, Guam, American Samoa, and the Commonwealth of the Northern Mariana Islands are also defined as high-need schools. Your school is not considered a high-need school by these metrics. However, your school can self-certify for priority status if they are not represented in the dataset and received a Title I grant during the 2021-2022 school year. School districts can also self-certify if they have more than 35,000 students or more than 45 schools and 80% or more of the schools in the district received a Title I grant. Sub-groups of schools in large districts can receive prioritization if they all received Title I grants. According to the EPA&apos;s data, your school district {relevantStats?.self_certifiable_clean_bus_school === true ? "is" : "is not"} eligible to self-certify.
        </p>
      )
      }
      break;
    case "rural_schools":
      requirementContent = (
        <p><strong>Rural schools:</strong> School districts that are identified with locale code “43-Rural: Remote” by the National Center for Education Statistics (NCES) are given priority for grant funding. Your school {relevantStats?.rural_school === true ? "is" : "is not"} in a rural area, according to this metric.
        </p>
      )
      if (relevantStats?.rural_school === true) {
        requirementStatus = true
      }
      break;
    case "bureau_funded_schools":
      requirementContent = (
        <p><strong>Bureau of Indian Affairs-funded schools:</strong> School districts that receive funding from the Bureau of Indian Affairs are given priority for this program. Your school {relevantStats?.bureau_funded_school === true ? "is" : "is not"} a Bureau-funded school.
        </p>
      )
      if (relevantStats?.bureau_funded_school === true) {
        requirementStatus = true
      }
      break;
    case "schools_with_children_on_indian_land":
      requirementContent = (
        <p><strong>Schools serving children who reside on Indian land:</strong> School districts that receive basic support payments for children who reside on Indian land are given priority under this program. Your school {relevantStats?.school_with_children_on_indian_land === true ? "does" : "does not"} meet this qualification.
        </p>
      )
      if (relevantStats?.school_with_children_on_indian_land === true) {
        requirementStatus = true
      }
      break;
    case "disadvantaged_communities":
      requirementContent = (
        <p><strong>Disadvantaged communities:</strong> While each state can develop their own plan for prioritizing disadvantaged communities, the federal government developed the Electric Vehicle (EV) Charging Justice40 Map Tool in the interim for defining and identifying disadvantaged communities. Your school {relevantStats?.disadvantaged_community === true ? "is" : "is not"} in a disadvantaged community according to this tool, {relevantStats?.disadvantaged_community === true ? "increasing" : "decreasing"} its priority status.
        </p>
      )
      if (relevantStats?.disadvantaged_community === true) {
        requirementStatus = true
      }
      break;
    default:
      requirementContent = null
      break;
  }

  return (
    <div>
      {requirementStatus ? <FiCheck className="text-green"/> : <FiX className="text-red" />}
      {requirementContent}
    </div>
  )
}

export default Requirement
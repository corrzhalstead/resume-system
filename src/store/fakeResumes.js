import { faker } from "@faker-js/faker";

function generateResume() {
  const firstName = faker.person.firstName();
  const middleName = faker.person.middleName();
  const lastName = faker.person.lastName();
  const gender = faker.person.sexType() === "male" ? "Male" : "Female";
  const birthdate = faker.date.birthdate({
    min: 1970,
    max: 2005,
    mode: "year",
  });
  const age = new Date().getFullYear() - birthdate.getFullYear();

  // Generate employment dates that make sense
  const startYear = faker.date.past({ years: 15 }).getFullYear();
  const endYear = faker.datatype.boolean()
    ? "Present"
    : faker.date
        .between({
          from: new Date(startYear, 0, 1),
          to: new Date(),
        })
        .getFullYear()
        .toString();

  // Format start year with random month format
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formatStartDate = () => {
    const useFullMonth = faker.datatype.boolean();
    const useYear = faker.datatype.boolean();

    if (useYear && !useFullMonth) {
      return startYear.toString();
    } else {
      const monthArray = useFullMonth ? monthNames : shortMonths;
      const month = faker.helpers.arrayElement(monthArray);
      return `${month} ${startYear}`;
    }
  };

  const formatEndDate = () => {
    if (endYear === "Present") return "Present";

    const useFullMonth = faker.datatype.boolean();
    const useYear = faker.datatype.boolean();

    if (useYear && !useFullMonth) {
      return endYear;
    } else {
      const monthArray = useFullMonth ? monthNames : shortMonths;
      const month = faker.helpers.arrayElement(monthArray);
      return `${month} ${endYear}`;
    }
  };

  // Define job categories with matching job titles
  const jobCategories = {
    Professional: [
      "Accountant",
      "Marketing Manager",
      "Project Manager",
      "Business Analyst",
      "Financial Advisor",
      "Operations Manager",
      "Sales Manager",
      "Consultant",
      "Attorney",
      "Doctor",
      "Pharmacist",
      "Architect",
    ],
    Technical: [
      "Software Engineer",
      "Data Analyst",
      "Network Engineer",
      "Web Developer",
      "Database Administrator",
      "Systems Analyst",
      "IT Support",
      "Cloud Engineer",
      "Cybersecurity Specialist",
      "DevOps Engineer",
      "Mobile Developer",
      "QA Engineer",
    ],
    Administrative: [
      "HR Manager",
      "Administrative Assistant",
      "Office Manager",
      "Receptionist",
      "Executive Secretary",
      "Data Entry Clerk",
      "Customer Service Representative",
      "HR Admin",
      "Payroll Specialist",
      "Office Coordinator",
    ],
    Skilled: [
      "Electrician",
      "Plumber",
      "Carpenter",
      "Welder",
      "Mechanic",
      "HVAC Technician",
      "Construction Worker",
      "Machine Operator",
      "Maintenance Technician",
      "Painter",
      "Roofer",
      "Landscaper",
    ],
  };

  // Randomly select a job category and then a matching job title
  const selectedCategory = faker.helpers.arrayElement(
    Object.keys(jobCategories)
  );
  const jobTitle = faker.helpers.arrayElement(jobCategories[selectedCategory]);

  return {
    id: faker.number.int({ min: 1, max: 9999 }),
    firstName,
    middleName,
    lastName,
    gender,
    birthdate: birthdate.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }),
    age: age.toString(),
    status: faker.helpers.arrayElement(["Single", "Married", "Widowed"]),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    province: faker.location.state({ abbreviated: true }),
    email: faker.internet.email({ firstName, lastName }),
    phone: `09${faker.string.numeric(2)}-${faker.string.numeric(3)}-${faker.string.numeric(4)}`,
    highestEducation: faker.helpers.arrayElement([
      "Bachelor's Degree",
      "Master's Degree",
      "High School",
      "Associate's Degree",
    ]),
    schoolName: faker.helpers.arrayElement([
      faker.company.name() + " University",
      faker.location.city() + " University",
      faker.location.city() + " State",
      faker.location.city() + " Tech",
      faker.location.city() + " Community College",
    ]),
    yearGraduated: faker.date.past({ years: 15 }).getFullYear().toString(),
    certificates: faker.datatype.boolean()
      ? [
          {
            certificate: faker.helpers.arrayElement([
              "PMP",
              "CPA",
              "AWS Certified Developer",
              "MBA",
              "IT Support Specialist",
              "Graphic Design Certification",
              "Human Resources Certification",
              "Data Analyst Certification",
              "Digital Marketing Specialist",
              "UX Design Certificate",
              "Network Engineer Certificate",
              "Full Stack Developer Certification",
              "Event Management Certificate",
            ]),
            year: faker.date.past({ years: 8 }).getFullYear().toString(),
          },
        ]
      : [],
    employments: [
      {
        companyName: faker.company.name(),
        position: jobTitle,
        yearStarted: formatStartDate(),
        yearEnd: formatEndDate(),
      },
    ],
    jobCategory: selectedCategory,
    jobTitle: jobTitle,
  };
}

const resumes = Array.from({ length: 100 }, generateResume);

export default resumes;

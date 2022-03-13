const rawJsonData = {
  user: {
    name: "Sefat Anam",
    contactNo: 2342,
    email: "sefatanam@gmail.com",
    address: [
      {
        city: "Gazipur",
        village: "Dagari",
        zipCode: 24234,
        addressId: 2,
      },
      {
        city: "Gazipur",
        village: "Dagari",
        zipCode: 24234,
        addressId: 1,
      },
      {
        city: "Gazipur",
        village: "Dagari",
        zipCode: 24234,
        addressId: 3,
      },
    ],

    academic: {
      degree: "BSc",
      institute: "Gazipur University",
      passingYear: "2019",
      gpa: "3.5",
      academicId: 1,
      govInfo: {
        govId: "123456789",
        govIdType: "EIIN",
        govIdIssueDate: "2019-01-01",
        govIdExpireDate: "2020-01-01",
      },
    },

    experience: [
      {
        companyName: "ABC",
        designation: "Software Engineer",
        startDate: "2019-01-01",
        endDate: "2020-01-01",
        experienceId: 1,
      },
    ],
  },
};

export { rawJsonData };

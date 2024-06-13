import { countriesData } from "./countries";
import { FormData } from "./types";

export const categoriesArr = [
  "Medical",
  "Travel",
  "Education",
  "Food",
  "Rent",
  "Entertainment",
  "Sports",
  "Animals",
  "Religion",
  "Events",
  "Community",
  "Competition",
  "Creative",
  "Business",
  "Funerals/Memorials",
  "Family",
  "Environment",
  "Others",
];

export const formOneArr: FormData[] = [
  {
    name: "recipientQuestion",
    type: "select",
    label: "Who is the Beneficiary of the Fundraising Campaign?",
    options: [
      "Personal Fundraising",
      "Fundraising for Someone Else",
      "Fundraising for a Charity",
    ],
  },
  {
    name: "recipient",
    type: "text",
    label: "Name of the Beneficiary or Charity",
  },
  {
    name: "country",
    type: "select",
    label: "Destination of the Fundraising Proceeds",
    note: "This selection determines the currency in which you will receive your donations. Please note, once your choice is submitted, it cannot be altered.",
    options: countriesData.map((i) => `${i.country} - ${i.name} - ${i.code}`),
  },
  {
    name: "description",
    type: "textarea",
    note:"To secure donations, your appeal should be compelling and honest. Remember, donors need to believe in your cause.",
    label: "Reasons to Support this Fundraising Campaign",
  },
];


export const formTwoArr: FormData[] = [
  {
    name: "phone",
    type: "phone",
    label: "Beneficiary Contact Number"
  },
  {
    name: "address",
    type: "address",
    label: "Beneficiary or Charity Location",
  },
  {
    name: "amountToRaise",
    type: "text",
    label: "Fundraising Goal Amount",
  },
  {
    name: "campaignPeriod",
    type: "number",
    note:"This is the duration of your fundraising campaign. Once set, it can be adjusted as needed. The campaign will end and funds will be disbursed to the beneficiary after this period.",
    label: "Fundraising Campaign Duration (Days)",
  },
  {
    name: "proof",
    type: "unknown",
    note:"Providing evidence strengthens donor trust. Share supporting documents or proof that highlight the importance of addressing this cause.",
    label: "Provide Supporting Evidence",
  },
];


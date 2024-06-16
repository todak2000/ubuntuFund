import { faker } from "@faker-js/faker";
import { categoriesArr } from "../components/constants/categories";

export type DonateCardProps = {
  id: string;
  imageUrl: string;
  category: string;
  recipient: string;
  recipientQuestion: string;
  country: string;
  description: string;
  currency: string;
  amountToRaise: string;
  amountRaised: string;
  campaignPeriod: string;
  proof: string[];
  isApproved: boolean;
};

export const generateCards = (): DonateCardProps[] => {
  return Array.from({ length: 10 }, (): DonateCardProps => {
    const amountToRaise = parseFloat(
      faker.finance.amount({
        min: 345,
        max: 50000,
      })
    );

    const amountRaised = amountToRaise * Math.random();

    return {
      id: faker.string.uuid(),
      imageUrl: faker.image.avatar(),
      recipientQuestion: faker.helpers.arrayElement([
        "Personal Fundraising",
        "Fundraising for Someone Else",
        "Fundraising for a Charity",
      ]),
      description: faker.lorem.paragraphs(),
      category: faker.helpers.arrayElement(categoriesArr),
      recipient: faker.person.fullName(),
      country: faker.location.country(),
      currency: faker.finance.currencySymbol(),
      amountToRaise: amountToRaise.toFixed(2),
      amountRaised: amountRaised.toFixed(2),
      campaignPeriod: `30 days`,
      proof: [
        faker.image.avatar(),
        faker.image.avatar(),
        faker.image.avatar(),
        faker.image.avatar(),
      ],
      isApproved: faker.datatype.boolean(),
    };
  });
};

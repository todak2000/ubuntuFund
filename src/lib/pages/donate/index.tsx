import { SESSION_COOKIE_NAME } from "@/lib/components/constants/session";
import Donate from "@/lib/components/donate";
import DonateGrid from "@/lib/components/donate/grid";
import { campaignData } from "@/lib/components/constants/database";
import { generateCards } from "@/lib/helpers/generateData";
import { id_ID } from "@faker-js/faker";
import type { NextPage } from "next";
import { cookies } from "next/headers";

const DonatePage: NextPage = async () => {
  const cards = campaignData;

  return <Donate cards={cards} />;
};

export default DonatePage;

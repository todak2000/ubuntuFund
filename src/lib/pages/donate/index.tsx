import { SESSION_COOKIE_NAME } from "@/lib/components/constants/session";
import Donate from "@/lib/components/donate";
import DonateGrid from "@/lib/components/donate/grid";

import { generateCards } from "@/lib/helpers/generateData";
import type { NextPage } from "next";
import { cookies } from "next/headers";

const DonatePage: NextPage = async () => {
  const cards = generateCards();
  console.log(cards);

  return (
    <Donate cards={cards}/>
  );
};

export default DonatePage;

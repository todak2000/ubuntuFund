import Donate from "@/lib/components/donate";
import { campaignData } from "@/lib/components/constants/database";

import type { NextPage } from "next";


const DonatePage: NextPage = async () => {
  const cards = campaignData;

  return <Donate cards={cards} />;
};

export default DonatePage;

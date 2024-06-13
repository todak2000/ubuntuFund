import { SESSION_COOKIE_NAME } from "@/lib/components/constants/session";
import FeaturesSection from "@/lib/components/features/features";
import Hero from "@/lib/components/landingHero/hero";
import SellingSection from "@/lib/components/selling/selling";
import Footer from "@/lib/layout/Footer";
import Header from "@/lib/layout/Header";
import type { NextPage } from "next";
import { cookies } from 'next/headers';


const Home: NextPage = async () => {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value || null;
  return (
    <>
    <div className="w-full h-full">
      <Hero session={session}/>
      <FeaturesSection />
      <SellingSection />
    </div>
    <Footer />
    </>
  );
};

export default Home;

import { categoriesArr } from "@/lib/components/constants/categories";
import { SESSION_COOKIE_NAME } from "@/lib/components/constants/session";
import Form from "@/lib/components/create/form";
import type { NextPage } from "next";
import { cookies } from 'next/headers';


const RecipientPage: NextPage = async () => {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value || null;
  
  return (
    <div className="w-full md:w-2/3 md:mt-[3vh] px-2 py-6 md:p-6 mx-auto">
      
      <Form categoriesArr={categoriesArr}/>
      
    </div>
  );
};

export default RecipientPage;

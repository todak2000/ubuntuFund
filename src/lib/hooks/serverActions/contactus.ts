"use server";

import { ContactFormProps } from "@/lib/components/constants/types";

export const postContactUsForm = async (data: ContactFormProps) => {
  const response = await fetch(`${process.env.DOMAIN}/api/contactus`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const dataa = await response.json();
  return dataa;
};

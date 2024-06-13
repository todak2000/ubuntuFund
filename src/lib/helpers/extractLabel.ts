import { FormData } from "../components/constants/types";

type FormDataa = {
  [key: string]: any;
};

export const extractLabels = (
  arr: FormData[],
  formData: FormDataa
): Array<{ [key: string]: string }> => {
  const labels: Array<{ [key: string]: string }> = [];

  arr.forEach((obj) => {
    if (formData.hasOwnProperty(obj.name)) {
      labels.push({ [obj.name]: obj.label });
    }
  });
  labels.push({ currency: "Currency fund would be disbursed" });
  labels.push({ category: "Selected Category" });
  return labels;
};

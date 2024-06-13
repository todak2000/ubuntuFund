'use client'
import { FC, useState } from "react";



import CategoryForm from "./categoryForm";
import FormOne from "./formOne";
import FormTwo from "./formTwo";
import SummaryForm from "./summaryForm";
type FormProps ={
    categoriesArr: string[];
}
const Form: FC<FormProps> = ({categoriesArr}) => {
const [page, setPage]= useState<number>(0)
  return (
    <>
    {page === 0 && <CategoryForm categories={categoriesArr} setPage={setPage}/>}
    {page === 1 && <FormOne setPage={setPage}/>}
    {page === 2 && <FormTwo setPage={setPage}/>}
    {page === 3 && <SummaryForm setPage={setPage}/>}

    </>
  );
};

export default Form;

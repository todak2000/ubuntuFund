'use client'
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "@/lib/store/slices/form";
import { form } from "@/lib/store";
import FormButton from "../button/formButton";
import { cn } from "@/lib/styles/utils";

const CategoryForm: FC<{categories: string[], setPage:React.Dispatch<React.SetStateAction<number>>}> = ({categories, setPage}) => {
  const dispatch = useDispatch();
  const { category } = useSelector(form);
  const handleCategory = (text: string) => {
    dispatch(updateForm({ category: text }));
  };

  const handleNext = () => {
    console.log('Next button clicked');
    setPage(1)
  };

  return (
    <>
    <p className="font-bold text-lg">Get started already on Your Fundraising Journey</p>
      <p>Select a Category</p>
      <div className="w-full mx-auto gap-4 md:gap-6 flex flex-row flex-wrap items-center justify-around py-6 mt-3">
        {categories.map((i) => (
          <p
            key={i}
            onClick={() => handleCategory(i)}
            className={cn("cursor-pointer px-4 md:px-6 py-2 rounded-full text-sm md:text-lg", {
              " bg-black text-white border-black": category === i,
              "text-black border border-black hover:bg-gray-200 hover:text-black hover:border-0": category !== i
            })}
          >
            {i}
          </p>
        ))}
      </div>
      {category !== '' &&
      <div className="w-full">
      <FormButton 
        text='Next'
        loading={false}
        onClick={handleNext}
        customClass="bg-black text-white hover:opacity-70 mx-auto" 
      />
    </div>
      }
    </>
  );
};

export default CategoryForm;

import { FC, ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "@/lib/store/slices/form";
import { formOneArr } from "../constants/categories";
import FormButton from "../button/formButton";
import { form, user } from "@/lib/store";
import { Tooltip, Button } from "@nextui-org/react";
import { FaInfoCircle } from "react-icons/fa";

type StateType = {
  [key: string]: string | number;
};

const FormOne: FC<{
  setPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setPage }) => {
  const dispatch = useDispatch();
  const { name: userName, email } = useSelector(user);
  const formm = useSelector(form);
  const { recipient: reciever, country, currency } = formm
  const [formState, setFormState] = useState<StateType>({});
  const [errors, setErrors] = useState<StateType>({});
  const [initialClick, setInitialClick] = useState<boolean>(false);

 

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    dispatch(updateForm({ [name]: value }));

    if (name === "recipientQuestion" && value === "Personal Fundraising") {
      setFormState((prevState) => ({ ...prevState, recipient: userName }));
      dispatch(updateForm({ recipient: userName }));
    }
    if (country !== "" && currency === "") {
      let curr = country.split(" -")[country.split(" -").length - 1];

      dispatch(updateForm({ currency: curr }));
      dispatch(updateForm({email:email}))
    }

    initialClick && validateForm();
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    for (let field of formOneArr) {
      if (!(formm as any)[field.name]) {
        errors[field.name] = `${field.name} cannot be empty`;
      }
      else {
        // If the field is not empty, remove any existing error
        if (errors[field.name]) {
          delete errors[field.name];
        }
      }
    }

    setErrors(errors);
    return errors;
  };
  useEffect(()=>{
    initialClick && validateForm();
  }, [formState, formm])

  const handleNext = () => {
    const err = validateForm();
    !initialClick && setInitialClick(true);
    if (!err || Object.keys(err).length === 0) {
      setPage(2);
    }
  };

  return (
    <form className="space-y-4 mx-auto lg:w-2/3">
      {formOneArr.map((field) => (
        <div key={field.name}>
          <label className=" text-gray-700 my-2 text-sm md:text-lg flex flex-row">
            {field.label}
            {field.note && (
              <Tooltip
                showArrow={true}
                content={field.note}
                color="foreground"
                className="bg-black text-white md:w-1/2 p-2 text-xs"
                placement="left-end"
              >
                <Button>
                  <FaInfoCircle className="text-sm text-gray-400 cursor-pointer" />
                </Button>
              </Tooltip>
            )}
          </label>

          {field.type === "select" ? (
            <select
              name={field.name}
              value={(formm as any)[field.name]}
              onChange={handleChange}
              className="w-full px-6 py-2 border-[0.5px] border-black h-[48px] focus:border-black focus:outline-none focus:ring-black"
            >
              <option>Select Option</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              name={field.name}
              onChange={handleChange}
              value={(formm as any)[field.name]}
              rows={5}
              className="w-full px-6 py-2 border-[0.5px] border-black  focus:border-black focus:outline-none focus:ring-black"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={
                field.name === "recipient" && reciever !== ""
                  ? reciever
                  : (formm as any)[field.name]
              }
              onChange={handleChange}
              className="w-full px-6 py-2 border-[0.5px] border-black h-[48px] focus:border-black focus:outline-none focus:ring-black"
            />
          )}
          {errors[field.name] && (
            <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
          )}
        </div>
      ))}

      <FormButton
        text="Next"
        loading={false}
        onClick={handleNext}
        customClass="bg-black text-white hover:opacity-70 mx-auto"
      />
    </form>
  );
};

export default FormOne;

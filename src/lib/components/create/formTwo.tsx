import { FC, ChangeEvent, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "@/lib/store/slices/form";
import { formTwoArr } from "../constants/categories";
import FormButton from "../button/formButton";
import { form } from "@/lib/store";
import { useLoadScript } from "@react-google-maps/api";
import {
  CountryCode,
  isValidNumberForRegion,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import { IoArrowBackCircle } from "react-icons/io5";
import { countriesData } from "../constants/countries";
import { formatAsMoney } from "@/lib/helpers/formatMoney";
import FileUpload from "../fileUpload/fileUpload";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/react";
import { FaInfoCircle } from "react-icons/fa";
type StateType = {
  [key: string]: string | number | File[];
};

const FormTwo: FC<{
  setPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setPage }) => {
  const dispatch = useDispatch();
  const formm = useSelector(form);
  const [initialClick, setInitialClick] = useState<boolean>(false);
  const { country, phone: phoneNumber, amountToRaise } = formm;
  const [formState, setFormState] = useState<StateType>({});
  const [errors, setErrors] = useState<StateType>({});
  const [files, setFiles] = useState<File[]>([]);
  const addressRef = useRef<HTMLInputElement | null>(null);
  const libraries: ("drawing" | "places" | "geometry" | "visualization")[] = [
    "places",
  ];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string,
    libraries,
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    if (name === "phone") {
      const countryCode =
        countriesData.find((i) => i.country === country.split(" -")[0])
          ?.countryCode ?? "NG";
      const phoneNumber = parsePhoneNumberFromString(
        value,
        countryCode as CountryCode
      );

      if (
        !phoneNumber ||
        !isValidNumberForRegion(phoneNumber.number, countryCode as CountryCode)
      ) {
        setErrors((prevState) => ({
          ...prevState,
          [name]: `Invalid ${country.split(" -")[0]} phone number`,
        }));
        return;
      } else {
        setErrors((prevState) => {
          const newState = { ...prevState };
          delete newState[name];
          return newState;
        });
      }

      value = phoneNumber.formatInternational();
    }

    setFormState((prevState) => ({ ...prevState, [name]: value }));
    dispatch(updateForm({ [name]: value }));

    initialClick && validateForm();
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    for (let field of formTwoArr) {
      if (
        formState[field.name] === undefined ||
        formState[field.name] === null
      ) {
        errors[field.name] = `${field.name} cannot be empty`;
      } else {
        // If the field is not empty, remove any existing error
        if (errors[field.name]) {
          delete errors[field.name];
        }
      }
    }

    setErrors(errors); // Update the errors state
    return errors;
  };

  const handleNext = () => {
    const err = validateForm();
    !initialClick && setInitialClick(true);
    if (!err || Object.keys(err).length === 0) {
      setPage(3);
    }
  };
  const handleBack = () => {
    setPage(1);
  };

  useEffect(() => {
    setFormState((prevState) => ({ ...prevState, proof: files }) as StateType);
    dispatch(updateForm({ proof: files }));
  }, [files, setFiles]);

  useEffect(() => {
    initialClick && validateForm();
  }, [formState, formm]);

  const handlePlaceChanged = async (autocomplete: any) => {
    if (!isLoaded) return;
    const place = autocomplete.getPlace();
    if (!place || !place.geometry) {
      return;
    }

    const componentTypes = [
      "premise",
      "route",
      "locality",
      "neighborhood",
      "administrative_area_level_1",
    ];

    const addressParts = componentTypes.map((type) => {
      const component = place.address_components.find(
        (component: any) => component.types[0] === type
      );
      return component ? component.long_name : "";
    });

    const addressString = addressParts.filter((part) => part).join(", ");
    setFormState((prevState) => ({ ...prevState, address: addressString }));
    dispatch(updateForm({ address: addressString }));
  };

  useEffect(() => {
    const options = {
      // componentRestrictions: { country: "ng" },
      fields: ["address_components", "geometry"],
    };

    if (isLoaded && addressRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(
        addressRef.current,
        options
      );
      autocomplete.addListener("place_changed", () =>
        handlePlaceChanged(autocomplete)
      );
    }
  }, [isLoaded]);
  return (
    <>
      <div className="flex flex-row items-center">
        <IoArrowBackCircle
          className="cursor-pointer text-3xl lg:text-5xl"
          onClick={handleBack}
        />
      </div>
      <form className="space-y-4 mx-auto lg:w-2/3 mb-12">
        {formTwoArr.map((field) => (
          <div key={field.name}>
            <label className="block text-gray-700 my-2 text-sm md:text-lg">
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
            ) : field.type === "unknown" ? (
              <FileUpload name={field.name} files={files} setFiles={setFiles} />
            ) : field.type === "address" ? (
              <input
                type={field.type}
                name={field.name}
                ref={addressRef}
                onChange={handleChange}
                className="w-full px-6 py-2 border-[0.5px] border-black h-[48px] focus:border-black focus:outline-none focus:ring-black"
              />
            ) : (
            
              <input
                type={field.type}
                name={field.name}
                onChange={handleChange}
                className="w-full px-6 py-2 border-[0.5px] border-black h-[48px] focus:border-black focus:outline-none focus:ring-black"
              />
            )}

            {field.name === "phone" && phoneNumber !== "" && (
              <span className="text-xs 2xl:text-sm text-gray-700">
                Please confirm your phone number: <b>{phoneNumber}</b> according
                to international standards for accuracy and verification.
              </span>
            )}
            {field.name === "amountToRaise" && amountToRaise !== "" && (
              <span className="text-xs 2xl:text-sm text-gray-700">
                Please verify your fundraising goal:{" "}
                <b>
                  {country.split(" -")[country.split(" -").length - 1]}{" "}
                  {formatAsMoney(amountToRaise)}
                </b>
                . This is the target amount you aim to raise through your
                crowdfunding campaign.
              </span>
            )}
            {typeof errors[field.name] === "string" && (
              <p className="text-red-500 text-xs mt-1">
                {errors[field.name] as string}
              </p>
            )}
          </div>
        ))}
        <FormButton
          text="Next"
          loading={false}
          onClick={handleNext}
          customClass=" cursor-pointer bg-black text-white hover:opacity-70 mx-auto"
        />
      </form>
    </>
  );
};

export default FormTwo;

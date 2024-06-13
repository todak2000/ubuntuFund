import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  email: yup.string().email("Invalid email").required("This field is required"),
  message: yup.string().required("This field is required"),
  phoneNumber: yup.string().required("This field is required"),
  subject: yup.string().required("This field is required"),
});

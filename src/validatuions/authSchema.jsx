import * as yup from "yup";

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email or phone number is required")
    .matches(
      /^(\+?\d{1,3}[- ]?)?\d{10}$|^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Enter a valid email or phone number"
    ),
  name: yup.string().required("Name is required"),
  secondName: yup.string().required("Second Name is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  postalCode: yup
    .string()
    .required("Postal Code is required")
    .matches(/^\d{4,10}$/, "Invalid Postal Code"),
  province: yup.string().required("Province is required"),
  country: yup.string().required("Country is required"),
});

import * as Yup from "yup";

const phoneRegExp = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;

const passportNum = /^[A-Z0-9]{9}$/i;

export const basicSchemasLogin = Yup.object().shape({
  mobile: Yup.string()
    .matches(phoneRegExp, "Enter valid mobile number")
    .required("Mobile number is required"),
});

export const basicSchemasRegister = Yup.object().shape({
  
  // name: Yup.string().required("Full Name is required"),
  firstname: Yup.string().matches(/^[A-Za-z]+$/, "First name can only contain letters").required("First Name is required"),
  lastname: Yup.string().matches(/^[A-Za-z]+$/, "Surname can only contain letters").required("Surname is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  //   mobile: Yup.string()
  //       .matches(phoneRegExp, 'Enter valid mobile number')
  //       .required('Mobile number is required'),
  password: Yup.string()
    .min(8, "Password should be 8 chars.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),

  passport: Yup.string().matches(passportNum, "Enter valid passport number"),
  //   tin: Yup
  //       .string(),
  agree: Yup.boolean().required(),
});

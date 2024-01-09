import * as yup from "yup";

export const userValidationSchema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords Don't Match")
        .required(),
})

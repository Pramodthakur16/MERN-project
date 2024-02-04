import * as yup from "yup";

export const userValidationSchema = yup.object().shape({
    fullName: yup.string().required("Fullname is required!"),
    email: yup.string().email().required("Email is required"),
    age: yup.number().positive().integer().min(18).required("Minimum age should be 18yrs old"),
    password: yup.string().min(4).max(20).required("Password must be between 4-20 characters"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords Don't Match")
        .required(),
})

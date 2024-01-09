import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { userValidationSchema } from "./userValidationSchema";

const UserForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userValidationSchema),
    });

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name"> Name </label>
                    <input type="text" placeholder="Full Name..." {...register("fullName")} />
                    <p>{errors.fullName?.message}</p>
                </div>

                <div>
                    <label htmlFor="email"> Email </label>
                    <input type="text" placeholder="Email..." {...register("email")} />
                    <p>{errors.email?.message}</p>
                </div>

                <div>
                    <label htmlFor="age"> Age </label>
                    <input type="number" placeholder="Age..." {...register("age")} />
                    <p>{errors.age?.message}</p>
                </div>

                <div>
                    <label htmlFor="password"> Password </label>
                    <input
                        type="password"
                        placeholder="Password..."
                        {...register("password")}
                    />
                    <p>{errors.password?.message}</p>
                </div>

                <div>
                    <label htmlFor="confirmPassword">confirmPassword </label>
                    <input
                        type="password"
                        placeholder="Confirm Password..."
                        {...register("confirmPassword")}
                    />
                    <p>{errors.confirmPassword?.message}</p>
                </div>
                
                <button type="submit">Button</button>
            </form>
        </>
    )
}

export default UserForm;
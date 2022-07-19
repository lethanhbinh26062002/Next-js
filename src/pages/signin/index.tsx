import { useAuth } from '../../hooks/auth';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string,
    password: string,
};
const Signin = () => {
    const { signIn } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSumbit: SubmitHandler<Inputs> = async (user) => {
        const data = await signIn(user);
        console.log("Client", user);

    }
    return (
        <form onSubmit={handleSubmit(onSumbit)} className="max-w-lg">
            <label htmlFor="">Email</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" type="email" {...register("email", { required: true })} />
            {errors.email && <span className="text-red-700">Email is required</span>}
            <br />
            <label htmlFor=""> Password</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" type="password" {...register("password", { required: true })} />
            {errors.password && <span className="text-red-700">Password is required</span>}
            <br />
            <button type="submit" className="btn btn-primary border-t-cyan-400">SignIn</button>
        </form>
    );
}

export default Signin
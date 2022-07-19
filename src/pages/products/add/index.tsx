import { add } from 'api/products';
import useProducts from 'hooks/use-product';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    name: string
};

const ProductAdd = () => {
    const { create } = useProducts()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSumbit: SubmitHandler<Inputs> = async (product) => {
        const data = await create(product);
        console.log("Data create", product);
    }
    return (
        <form onSubmit={handleSubmit(onSumbit)} className="max-w-lg">
            <label htmlFor="">Name</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" type="text" {...register("name", { required: true })} />
            {errors.name && <span className="text-red-700">Name is required</span>}
            <br />
            <button type="submit" className="btn btn-primary border-t-cyan-400">Create product</button>
        </form>
    )
}

export default ProductAdd
import { add, getAll, getOne, removeItem, updateItem } from "../api/products";
import useSWR from "swr";

const useProducts = () => {
    const { data, error, mutate } = useSWR("/products");
    // real
    const real = async (id: any) => {
        const product = await getOne(id);       
        return product
    };
    // create
    const create = async (item) => {
        const product = await add(item);
        return{...data, product}
    };
    // update
    const update = async (id,product) => {
        const { data: productList } = await getAll();   
        const productData = await productList.find((item) => {
            if((item.id === id)){
                item = product
            }
        })
        await updateItem(id,product)
        return product
        // const newProducts =data.map((item) => item.id === data.id ? product : item)
        // return newProducts
    }
    // delete
    const remove = async (id) => {
        await removeItem(id);
        const newProducts = data.filter((item) => item.id != id);
        mutate(newProducts);
    };
    return {
        data,
        error,
        real,
        create,
        update,
        remove,
    };
};

export default useProducts;
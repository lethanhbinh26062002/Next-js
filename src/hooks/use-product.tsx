import { add, getAll, getOne, removeItem } from "../api/products";
import useSWR from "swr";

const useProducts = () => {
    const { data, error, mutate } = useSWR("/products");
    // real
    const real = async (id) => {
        const product = await getOne(id);
        return product
    };
    // create
    const create = async (item) => {
        const product = await add(item);
        mutate([...data, product]);
    };
    // update
    const update = async (id,product) => {
        const { data: productList } = await getAll();   
        const productData = await productList.find((item) => item.id == id);
        console.log("Data",productData);
        const productUpdate = { id, product }   
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
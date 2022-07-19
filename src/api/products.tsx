import instance from "./instance";

export const getAll = () => {
    return instance.get(`/products`);
}
export const getOne = (id: any) => {
    return instance.get(`/products/${id}`);
}
export const add = (product: any) => {
    return instance.post("/products", product);
};
export const updateItem = (id: any,product: any) => {
    return instance.patch(`/products/${id}`,product);
};
export const removeItem = (id: any) => {
    return instance.delete(`/products/${id}`);
};
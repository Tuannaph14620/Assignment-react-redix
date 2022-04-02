import instance from "./instance";

export const listProduct = ()=>{
    const url = `/products`;
    return instance.get(url)
}
export const addProduct = (product)=>{
    const url = `/products`;
    return instance.post(url, product)
}
export const removeProduct = (id)=>{
    const url = `/products/${id}`;
    return instance.delete(url)
}
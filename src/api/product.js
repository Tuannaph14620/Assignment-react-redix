import instance from "./instance";

export const listProduct = ()=>{
    const url = `/products`;
    return instance.get(url)
}
export const ListProductHome = () => {
    const url = `/products/?_sort=createdAt&_order=asc&_limit=5`;
    return instance.get(url);
};
export const listOneProduct = (id)=>{
    const url = `/products/${id}`;
    return instance.get(url)
}
export const addProduct = (product)=>{
    const url = `/products`;
    return instance.post(url, product)
}
export const updateProduct = (product)=>{
    const url = `/products/${product.id}`;
    return instance.put(url, product)
}
export const removeProduct = (id)=>{
    const url = `/products/${id}`;
    return instance.delete(url)
}
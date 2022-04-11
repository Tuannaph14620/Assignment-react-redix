import instance from "./instance";

export const addOrder = (order)=>{
    const url = `/order`
    return instance.post(url, order)
}
export const listOrder = ()=>{
    const url = `/order`
    return instance.get(url)
}
export const listOneOrder = (idOrder)=>{
    const url = `/order/${idOrder}`
    return instance.get(url)
}
export const removeOrder = (idOrder)=>{
    const url = `/order/${idOrder}`
    return instance.delete(url)
}
import instance from "./instance";

export const listCate = ()=>{
    const url = `categories`
    return instance.get(url)
}
export const listOneCate = (id)=>{
    const url = `categories/${id}`
    return instance.get(url)
}
export const addCate = (category)=>{
    const url = `categories`
    return instance.post(url,category)
}
export const removeCate = (id)=>{
    const url = `categories/${id}`
    return instance.delete(url)
}
export const updateCate = (category)=>{
    const url = `categories/${category.id}`
    return instance.put(url, category)
}
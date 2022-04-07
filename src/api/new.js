import instance from "./instance";

export const ListNew =()=>{
    const url = `/posts`
    return instance.get(url)
}
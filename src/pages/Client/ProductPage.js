import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProductA_Z } from '../../api/product'
import { listCategory } from '../../features/categorySlice'
import { CateProduct, listProducts, SearchProduct, SortProductA_Z, SortProductNew, SortProductZ_A } from '../../features/productSlice'
const ProductPage = () => {
  const [state, setstate] = useState({value: "a"});
  const dispatch = useDispatch()
  const category = useSelector(data => data.category.value)
  const product = useSelector(data => data.product.value)
  useEffect(() => {
    dispatch(listProducts())
    dispatch(listCategory())
  }, []);
  const {register, handleSubmit, formState:{errors}, reset} = useForm()
  const onSubmit = data=>{
    dispatch(SearchProduct(data))
    reset()
  }
  
  // console.log("state",state);
  const handleSortCate = ()=>{
    const form_select =document.querySelector(".form-select")
    console.log("form_select=",form_select.value);
    dispatch(CateProduct(form_select.value))
  }
  const handleSort = ()=>{
    const form_sort =document.querySelector(".form-sort")
    console.log("form_sort=",form_sort.value);
    if (form_sort.value == 0) {
      dispatch(SortProductA_Z())
    }
    else if(form_sort.value == 1){
      dispatch(SortProductZ_A())
    }
    else if(form_sort.value == 2){
      dispatch(SortProductNew())
    }
    else{

    }

  }
  return (
    <div className="bg-white mx-20">
      <div>
        <div className="boxleft flex mb-4 ">
          <section>
            <div className="text1 mr-10" style={{ marginTop: 30 }}>
              <h2 className="font-bold text-xl">Danh mục sản phẩm</h2>
              <div>
                <select onChange={()=>handleSortCate()} className="form-select appearance-none w-48 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3">
                  <option>-- Danh mục --</option>
                  {category?.map((item, index)=>{
                    return <option key={index}  value={`${item.id}`}>{item.nameCate}</option> 
                  })}
                </select>
              </div>
            </div>
          </section>
          <section>
            <div className="text1" style={{ marginTop: 30 }}>
              <h2 className="font-bold text-xl mr-40 ">Lọc</h2>
              <div className=''>
                <select onChange={()=>handleSort()}  className="form-sort appearance-none w-48 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-3">
                  <option value={0}>Giá từ cao đến thấp</option>
                  <option value={1}>Giá từ thấp đến cao</option>
                  <option value={2}>Mới nhất</option>
                  <option value={3}>Phổ biến</option>
                </select>
              </div>
            </div></section>
          <section>
            <div style={{ marginTop: 65, marginLeft: 615 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register('data')} className="searchProduct border-2 p-2 pr-32 rounded-xl" type="text" placeholder="Tìm kiếm" />
              <button className="btn_search p-3 rounded-xl text-gray bg-white hover:bg-blue-400 font-bold transition" >Tìm kiếm</button>
              </form>
            </div>
          </section>
        </div>
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {product?.map((item, index) => {
            return <NavLink key={index} to={`/product/${item.id}/${item.categoryId}`} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={`${item.img}`} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
            </NavLink>
          })}
        </div>
      </div>
    </div>

  )
}

export default ProductPage
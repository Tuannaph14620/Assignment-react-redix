
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ListCateProduct, listOneProduct } from '../../api/product'
import { CateProduct, listProductsOne } from '../../features/productSlice'

const DetailProductPage = () => {
  const product = useSelector(data =>data.product.value)
  const [getProduct, setGetProduct] = useState([])
  const { id, cate } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    const getOne =async ()=>{
      const {data} = await listOneProduct(id)
      console.log(data.products);
      setGetProduct(data)
    }
    getOne()

    dispatch(CateProduct(cate))
  }, [])
  useEffect(() =>{
    
  },[])
  
  return (
    <main className=" px-10">
      <section>
        <div>
          <div className="flex justify-between px-20 pt-10">
            <div className="pro1">
              <img src={`${getProduct.img}`} width="500px" height="500px" alt />
            </div>
            <div className="mt-4 lg:mt-0 lg:row-span-4">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{Number(getProduct.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {/* Heroicon name: solid/star */}
                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {/* Heroicon name: solid/star */}
                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {/* Heroicon name: solid/star */}
                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {/* Heroicon name: solid/star */}
                    <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                  <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                </div>
              </div>
              <form className="mt-10">
                {/* quantity */}
                <div className="mt-10"><input type="number" id="inputQty" className="border border-gray-400 p-3" defaultValue={1} /> </div>
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                  </div>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Choose a size</legend>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                        <input type="radio" name="size-choice" defaultValue="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label" />
                        <p id="size-choice-0-label">XXS</p>
                        <div aria-hidden="true" className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                          <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                          </svg>
                        </div>
                      </label>
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" defaultValue="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                        <p id="size-choice-1-label">XS</p>
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                      </label>
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" defaultValue="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                        <p id="size-choice-2-label">S</p>
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                      </label>
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" defaultValue="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                        <p id="size-choice-3-label">M</p>
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                      </label>
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" defaultValue="L" className="sr-only" aria-labelledby="size-choice-4-label" />
                        <p id="size-choice-4-label">L</p>
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                      </label>
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" defaultValue="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
                        <p id="size-choice-5-label">XL</p>
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                      </label>
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" defaultValue="2XL" className="sr-only" aria-labelledby="size-choice-6-label" />
                        <p id="size-choice-6-label">2XL</p>
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                      </label>
                      <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                        <input type="radio" name="size-choice" defaultValue="3XL" className="sr-only" aria-labelledby="size-choice-7-label" />
                        <p id="size-choice-7-label">3XL</p>
                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true" />
                      </label>
                    </div>
                  </fieldset>
                </div>
                <button id="btnAddToCart" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
              </form>
            </div>
          </div>
          <div>
            <h2 className="py-4 text-blue-900 font-bold text-2xl uppercase">Sản phẩm liên quan</h2>
            <div className="news">
              <div className="flex flex-wrap justify-between  gap-px ">
                {product?.map(item => {
                  return <div className="col w-1/6 p-4">
                    <a href="/#/news/${post.id}"><img className="w-full" src={`${item.img}`} /></a>
                    <a href="/news/${post.id}">
                      <h3 className="py-2 font-bold text-blue-900">{item.name}</h3>
                    </a>
                    <p>{Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                  </div>


                })}

              </div>
            </div></div>

        </div>
      </section>
    </main>

  )
}

export default DetailProductPage
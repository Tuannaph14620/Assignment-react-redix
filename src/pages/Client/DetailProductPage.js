
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { ListCateProduct, listOneProduct } from '../../api/product'
import { addCarts, addItemToCart } from '../../features/CartSlice'
import { CateProduct, listProductsOne } from '../../features/productSlice'
import Slider from "react-slick"
const DetailProductPage = () => {
  const product = useSelector(data => data.product.value)
  const erorrSize = () => toast('Bạn vui lòng chọn size!')
  const errorSuccess = () => toast('Thêm sản phẩm vào giỏ hàng thành công !')
  const [getProduct, setGetProduct] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [S, setS] = useState('')
  const { id, cate } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // console.log("S",S);
  useEffect(() => {
    const getOne = async () => {
      const { data } = await listOneProduct(id)
      setGetProduct(data)
    }
    getOne()

    dispatch(CateProduct(cate))
  }, [])
  const HandleCart = (data, e) => {
    e.preventDefault()
    if (S === "") {
      
      erorrSize()
    } else {
      const datas = { ...data, price: +data.price, size: S, quantity: +quantity }
      dispatch(addCarts(datas))
      errorSuccess()
      navigate('/cart')

    }
  }
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }
  return (
    <main className=" px-10"> <ToastContainer />
      <section>
        <div>
          <div className="flex justify-between px-20 pt-10">
            <div className="pro1">
              <img src={`${getProduct.img}`} width="500px" height="500px" alt />
            </div>
            <div className="mt-4 lg:mt-0 lg:row-span-4">
              <h2 className="text-xl font-bold text-gray-900">{getProduct.name}</h2>
              <p className="text-lg text-gray-900 text-left">Giá sản phẩm:{Number(getProduct.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
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
              <div className="mt-10">
                {/* quantity */}
                <div class="div-group text-left">
                  <label>Quantity: </label>
                  <div class="input-group" >
                    <button id="down" class="border-2 p-1" onClick={() => setQuantity(quantity - 1)}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg></button>
                    <input type="text" id="myNumber" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="quantity p-1 text-xl " min={1} style={{ marginTop: 10, padding: '5px 5px', textAlign: "center", width: 40 }} />
                    <button id="up" class="border-2 p-1" onClick={() => setQuantity(quantity + 1)}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button>
                  </div>
                </div>
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center">
                    <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                    <select value={S} onChange={(e) => setS(e.target.value)} className='border-2 px-3 border-gray-500 ml-5'>
                      <option value=''>--Size--</option>
                      <option value={'S'}>S</option>
                      <option value={'M'}>M</option>
                      <option value={'L'}>L</option>
                      <option value={'XL'}>XL</option>
                      <option value={'XXL'}>XXL</option>
                    </select>
                  </div>
                </div>
                <button onClick={(e) => HandleCart({
                  productId: getProduct.id,
                  name: getProduct.name,
                  img: getProduct.img,
                  price: getProduct.price
                }, e)} id="btnAddToCart" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="py-4 text-blue-900 font-bold text-2xl uppercase">Sản phẩm liên quan</h2>
            <div className="news justify-center ">
              <Slider {...settings} >
                {product?.map(item => {
                  return <div className="col w-1/6 p-4 ">
                    <NavLink to={`/product/${item.id}/${item.categoryId}`}><img className="w-full" src={`${item.img}`} /></NavLink>
                    <NavLink to={`/product/${item.id}/${item.categoryId}`}>
                      <h3 className="py-2 font-bold text-blue-900">{item.name}</h3>
                    </NavLink>
                    <p>{Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                  </div>
                })}

              </Slider>
            </div></div>

        </div>
      </section>
    </main>

  )
}

export default DetailProductPage
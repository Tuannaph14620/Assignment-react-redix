import { data } from 'autoprefixer'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ListNews } from '../../features/NewSlice'
import { ListProductsHome } from '../../features/productSlice'

const HomePage = () => {
  const product = useSelector(data => data.product.value)
  const post = useSelector(data => data.post.value)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ListProductsHome())
    dispatch(ListNews())
  }, []);

  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className=" pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">Mùa hè sôi động cùng Manchester City</h1>
              <p className="mt-4 text-xl text-gray-500">Năm nay, bộ sưu tập mùa hè mới của chúng tôi sẽ che chở bạn khỏi những yếu tố khắc nghiệt của một thế giới không quan tâm bạn sống hay chết.</p>
            </div>
            <div>
              <div className="mt-60">
                {/* Decorative image grid */}
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649153699/FNb8zwsXIAU_geZ_djo1rf.jpg" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649153436/FPWDCYCXIAQqXi__vcyowo.jpg" className="w-full h-full object-center object-cover" />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649153494/FPWHluWXEAUKOJd_plrai6.jpg" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649153826/FO2wkxtX0AUQIX__sbzf7o.jpg" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649153697/FOToL91WUAox8k5_pgkvly.jpg" className="w-full h-full object-center object-cover" />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649153697/FOTo3sEWYAEAZ3D_iq7dzi.jpg" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649153697/FOTVZoiXwAQkivo_fbqmpf.jpg" className="w-full h-full object-center object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/product" style={{ marginRight: "705px" }} className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Shop Collection</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="w-10/12 m-auto" src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431709/a3_zu95pj.png" />
      <div className="px-32">
        {/* <div className="news">
          <div className="flex flex-wrap justify-between  gap-px ">
            {product?.map((item, index) => {
              return <div key={index} className="col w-1/6 p-4">
                <a href={`/product/${item.id}/${item.categoryId}`} ><img className="w-full" src={`${item.img}`} /></a>
                <a href={`/product/${item.id}/${item.categoryId}`}>
                  <h3 className="py-2 font-bold text-blue-900">{item.name}</h3>
                </a>
                <p>{Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
              </div>


            })}

          </div>
        </div> */}
        <div className="bg-white ">
          <div style={{marginBottom: "-180px", marginTop: '-100px'}} className="w-full mx-auto py-24 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:py-32 lg:max-w-7xl lg:grid-cols-2">
            <div className='text-left'>
              <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-3xl">Thông số kỹ thuật</h2>
              <p className="mt-4 text-gray-500 text-sm text-left">Kỷ niệm 10 năm mùa giải 2011/12. Áo đấu Manchester City Home Replica là mẫu áo lý tưởng để thêm vào bất kỳ bộ sưu tập nào của ManCity. Với đặc điểm là áo đấu của bộ quần áo bóng đá mùa giải 2021-22, chiếc áo đấu này chắc chắn sẽ thể hiện niềm tự hào Man City của bạn ở bất cứ nơi đâu bạn đến.</p>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900 text-left">Xuất xứ</dt>
                  <dd className="mt-2 text-sm text-gray-500">Designed by Puma, Manchester City.</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Vật liệu</dt>
                  <dd className="mt-2 text-sm text-gray-500">DryCELL - Các vật liệu có chức năng cao hút mồ hôi ra khỏi da của bạn và giúp bạn luôn khô ráo và thoải mái khi tập luyện
                    100% Polyester tái chế</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Logo</dt>
                  <dd className="mt-2 text-sm text-gray-500">Logo PUMA Cat trên ngực phải và cả hai tay áo
                    Cổ chữ V với cấu trúc xương sườn ở phía sau và lớp vải vỏ ở phía trước</dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Cấu trúc</dt>
                  <dd className="mt-2 text-sm text-gray-500">Kết cấu tay áo cố định ,
                    vòng bít ngoại quan tương phản trên cả hai tay áo<br />
                    Màu in trên vai trên<br />
                    Viền thẳng với kết thúc kim đôi</dd>
                </div>
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431711/a5_dsqt0r.png" className="bg-gray-100" />
              <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431709/a2_cunjge.png" className="bg-gray-100" />
              <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431709/a4_w8sgtj.png" className="bg-gray-100" />
              <img src="https://res.cloudinary.com/dl8w6p4sf/image/upload/v1645431708/a1_qfg8xr.png" className="bg-gray-100" />
            </div>
          </div>
        </div>
        <div className='row mb-10'>
          <div className='flex gap-10'>
            <NavLink to='/product' >
              <div className=''>
                <p className='absolute text-5xl uppercase font-bold text-white text-left pt-96 mt-24 pl-7'>Mua cuốn sách này <br /> ngay bây giờ!</p>
                <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649781159/HOMEPAGE_Content_Square_Tile-OurDecadeBook_2_bho04i.jpg' />
              </div>
            </NavLink>
            <NavLink to='/product' >
              <div className='w-full' >
                <p className='absolute text-5xl uppercase font-bold text-white text-left pt-96 mt-24 pl-7'>Mua 1 và  <br /> nhận 2 thứ miễn phí</p>
                <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649781159/HOMEPAGE_Content_Square_Tile_Lifestyle-4_1_vajajf.jpg' />
              </div>
            </NavLink>
          </div>
        </div>
        <div className='row mb-10'>
          <NavLink to='/product' >
            <div className='w-full' >
              <p className='absolute text-7xl uppercase font-bold text-white text-left pt-96 mt-20 pl-7'>Now <br/> -50%</p>
              <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649783833/HOMEPAGE_CONTENT_BLOCK-UCL-v1_1_zrpczc.jpg' />
            </div>
          </NavLink>
        </div>
        <div className='row'>
          <div className='flex gap-10'>
            <NavLink to='/product' >
              <div className=''>
                <p className='absolute text-4xl uppercase font-bold text-white text-left pt-96 mt-24 pl-7'>Trang phục <br/> chuẩn bị trước <br/> trận  đấu  giảm giá tới 50%</p>
                <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649781159/HOMEPAGE_Content_Square_Tile-PreMatch-V2_tged3e.jpg' />
              </div>
            </NavLink>
            <NavLink to='/product' >
              <div className='w-full' >
                <p className='absolute text-5xl uppercase font-bold text-white text-left pt-96 mt-24 pl-7'>Bộ suy tập mới <br /> cho mùa xuân 22</p>
                <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649781159/HOMEPAGE_Content_Square_Tile-Essentials_1_hacgq8.jpg' />
              </div>
            </NavLink>
          </div>
        </div>
      </div>

    </div>

  )
}

export default HomePage
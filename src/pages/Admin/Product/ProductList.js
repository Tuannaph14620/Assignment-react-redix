import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts, removeProducts } from '../../../features/productSlice'
const ProductList = () => {

    const product = useSelector(data => data.product.value)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(listProducts())
    }, [])

  return (
    <div className="col-lg-10 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Danh sách sản phẩm</h4>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                STT
              </th>
              <th>
                Tên danh mục
              </th>
              <th>
                Tên sản phẩm
              </th>
              <th>
                Gía sản phẩm
              </th>
              <th>
                Ảnh sản phẩm
              </th>
              <th>
                Ngày nhập hàng
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {product?.map((item, index)=> {
                  return <tr key={index}>
                  <td >
                    {index +1}
                  </td>
                  <td>
                      {item.categoryId === 1 ? "Trang phục sân nhà" : item.categoryId === 2 ? "Trang phục sân khách" : "Trang phục sân tập" }
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }
                  </td>
                  <td>
                    <img src={`${item.img}`}/>
                  </td>
                  <td>
                    {item.createdAt}
                  </td>
                  <td>
                      <button onClick={()=>{dispatch(removeProducts(item.id))}} className='btn btn-danger'>Remove</button>
                  </td>
                </tr>
              })}
            
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductList
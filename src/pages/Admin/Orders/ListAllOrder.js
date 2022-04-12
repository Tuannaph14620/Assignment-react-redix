import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { ListOrders, RemoveOrders } from '../../../features/OrderSlice'
import { removeProducts } from '../../../features/productSlice'
const ListAllOrder = () => {
    const notify = ()=> toast('Xóa thành công!')
    const order = useSelector(data => data.order.value)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ListOrders())
    }, [])

  return (
    <div className="col-lg-10 grid-margin stretch-card"> <ToastContainer/>
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Danh sách sản phẩm</h4>
      <div className="table-responsive">
        <table className="table table-striped text-left">
          <thead>
            <tr>
              <th>
                STT
              </th>
              <th>
                Tên người mua
              </th>
              <th>
                Số điện thoại
              </th>
              <th>
                  Email
              </th>
              <th>
              Địa chỉ
              </th>
              <th>
                Ngày nhập hàng
              </th>
              <th className='text-center'>Hành động</th>
            </tr>
          </thead>
          <tbody>
              {order?.map((item, index)=> {
                  return <tr key={index}>
                  <td >
                    {index +1}
                  </td>
                  <td>
                      {item.firstName + item.lastName}
                  </td>
                  <td>
                  {item.phone}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.address}
                  </td>
                  <td>
                    {item.createdAt}
                  </td>
                  <td>
                      <NavLink className='btn btn-primary mr-2' to={`/admin/order/${item.id}/detail`}>Xem chi tiết</NavLink>
                      <button onClick={()=>{dispatch(RemoveOrders(item.id),notify())}} className='btn btn-danger'>Remove</button>
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

export default ListAllOrder
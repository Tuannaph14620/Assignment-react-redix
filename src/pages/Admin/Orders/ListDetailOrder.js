import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { listOneOrder } from '../../../api/order'
import { ListOneOrders, RemoveOrders } from '../../../features/OrderSlice'
const ListDetailOrder = () => {
    const {id} = useParams()
    const [order, setOrder] = useState()
    const notify = ()=> toast('Xóa thành công!')
    const orders = useSelector(data => data.order.value.cart)
    const dispatch = useDispatch()
    useEffect(()=>{
        const getOne = async ()=>{
            const {data} = await listOneOrder(id)
            setOrder(data.cart)
        }
        getOne()
    }, [])
    console.log("order", order);
  return (
    <div className="col-lg-10 grid-margin stretch-card"> <ToastContainer/>
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Chi tiết đơn hàng</h4>
      <div className="table-responsive">
        <table className="table table-striped text-left">
          <thead>
            <tr>
              <th>
                STT
              </th>
              <th>
                Tên sản phẩm
              </th>
              <th>
                Giá sản phẩm 
              </th>
              <th>
                Số lượng
              </th>
              <th>
                Ảnh sản phẩm
              </th>
              <th>
                Tổng tiền
              </th>
              <th className='text-center'>Hành động</th>
            </tr>
          </thead>
          <tbody>
              {order?.map((item, index)=>{
                  return <tr >
                  <td >
                    {index +1}
                  </td>
                  <td>
                      {item.name}
                  </td>
                  <td>
                  {Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }
                  </td>
                  <td>
                    {item.quantity}
                  </td>
                  <td>
                  <img style={{borderRadius: 0, width: '100px', height: '110px' }}  src={`${item.img}`}/>
                  </td>
                  <td>
                  { (Number(item.price) * Number(item.quantity)).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }
                  </td>
                  <td>
                      <button onClick={()=>{dispatch(RemoveOrders(orders.id),notify())}} className='btn btn-danger'>Remove</button>
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


export default ListDetailOrder
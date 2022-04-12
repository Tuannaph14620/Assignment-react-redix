import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { ListContacts } from '../../../features/ContactSlice'
import { listProducts, removeProducts } from '../../../features/productSlice'
const ListAllContact = () => {
    const notify = ()=> toast('Xóa thành công!')
    const contact = useSelector(data => data.contact.value)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ListContacts())
    }, [])

    console.log("contact", contact);
  return (
    <div className="col-lg-10 grid-margin stretch-card"> <ToastContainer/>
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Danh sách phản hồi</h4>
      <div className="table-responsive">
        <table className="table table-striped text-left">
          <thead>
            <tr>
              <th>
                STT
              </th>
              <th>
                Tên khách hàng
              </th>
              <th>
                Số điện thoại
              </th>
              <th>
                Nội dung
              </th>
              <th>
                  Ngày gửi
              </th>
              <th className='text-center'>Hành động</th>
            </tr>
          </thead>
          <tbody>
              {contact?.map((item, index)=> {
                  return <tr key={index}>
                  <td >
                    {index +1}
                  </td>
                  <td>
                      {item.name}
                  </td>
                  <td>
                    {item.phone}
                  </td>
                  <td>
                    {item.content}
                  </td>
                  <td>
                    {item.createdAt}
                  </td>
                  <td>
                      <NavLink className='btn btn-primary mr-2' to={`/admin/product/${item.id}/edit`}>Update</NavLink>
                      <button onClick={()=>{dispatch(removeProducts(item.id),notify())}} className='btn btn-danger'>Remove</button>
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

export default ListAllContact
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ListUsers } from '../../../features/UserSlice'

const ListUser = () => {
    const dispatch = useDispatch()
    const users = useSelector(data => data.users.value)
    console.log("user",users);
    useEffect(()=>{
        dispatch(ListUsers())
    },[])
  return (
    <div className="col-lg-10 grid-margin stretch-card"> <ToastContainer/>
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Danh sách Tài khoản</h4>
        <div className="table-responsive">
          <table className="table table-striped text-left">
            <thead>
              <tr>
                <th>
                  STT
                </th>
                <th>
                  Username
                </th>
                <th>
                  Email
                </th>
                <th>
                  Địa chỉ
                </th>
                <th>
                  Số điện thoại
                </th>
                <th className='text-center'>Hành động</th>
              </tr>
            </thead>
            <tbody>
                {users?.map((item, index)=> {
                    return <tr key={index}>
                    <td >
                      {index +1}
                    </td>
                    <td>
                      {item.username}
                    </td>
                    <td>
                      {item.email}
                    </td>
                    <td>
                      {item.address}
                    </td>
                    <td>
                      {item.phone}
                    </td>
                    <td>
                        <NavLink className='btn btn-primary mr-2' to={`/admin/product/${item.id}/edit`}>Update</NavLink>
                        <button  className='btn btn-danger'>Remove</button>
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

export default ListUser
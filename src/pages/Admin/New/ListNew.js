import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { ListNews, RemoveNews } from '../../../features/NewSlice'

const EditNew = () => {
    const notify = ()=> toast('Xóa thành công')
    const news = useSelector(data=> data.post.value)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ListNews())
    },[])
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
                  Tiêu đề
                </th>
                <th>
                  Ngày đăng bài
                </th>
                <th>
                  Mô tả
                </th>
                <th>
                  Ảnh bài viết
                </th>
                <th className='text-center'>Hành động</th>
              </tr>
            </thead>
            <tbody>
                {news?.map((item, index)=> {
                    return <tr key={index}>
                    <td >
                      {index +1}
                    </td>
                    <td>
                        {item.title}
                    </td>
                    <td>
                        04-04-2022
                    </td>
                    <td>
                      {item.desc}
                    </td>
                    <td>
                      <img style={{borderRadius: 0, width: '100px', height: '110px' }}  src={`${item.img}`}/>
                    </td>
                    <td>
                        <NavLink className='btn btn-primary mr-2' to={`/admin/product/${item.id}/edit`}>Update</NavLink>
                        <button onClick={()=>{dispatch(RemoveNews(item.id),notify())}} className='btn btn-danger'>Remove</button>
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

export default EditNew
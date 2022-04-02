
import React from 'react'
import { useForm } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCategory } from '../../../features/categorySlice'

const AddCategory = () => {
  const {register, handleSubmit, formState:{errors}} = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit =  data =>{
    dispatch(addCategory(data))
    navigate('/admin/category')
  }

  return (
    <div className="col-md-10 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Thêm danh mục sản phẩm</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="forms-sample">
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Tên danh mục</label>
          <input type="text" {...register('nameCate',{required: true})} className="form-control" id="exampleInputUsername1" placeholder="Tên danh mục" />
          {errors.nameCate && <span>Bạn bắt buộc phải nhập tên danh mục</span>}
        </div>
        <button className="btn btn-primary">Submit</button>
        <button className="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</div>

  )
}

export default AddCategory
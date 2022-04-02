import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { listCategory } from '../../../features/categorySlice'
import { addProducts } from '../../../features/productSlice'

const AddProduct = () => {
    const dispatch = useDispatch()
    const category  = useSelector(data => data.category.value)
    useEffect(() => {
        dispatch(listCategory())
    }, []);

    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    const onSubmit = data =>{
        dispatch(addProducts(data))
    }
  return (
    <div className="col-10 grid-margin">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Thêm sản phẩm</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="form-sample">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sản phẩm</label>
              <div className="col-sm-9">
                <input type="text" {...register('name', {required: true})} className="form-control" />
                {errors.name && <span>Tên sản phẩm bắt buộc phải nhập</span>}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giá sản phẩm</label>
              <div className="col-sm-9">
                <input type="text" {...register('price', {required: true})} className="form-control" />
                {errors.price && <span>Giá sản phẩm bắt buộc phải nhập</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <div className="form-group row">
              <label className="col-sm-3 col-form-label">Số lượng</label>
              <div className="col-sm-9">
                <input type="text" {...register('quantity', {required: true})} className="form-control"  />
                {errors.quantity && <span>Số lượng sản phẩm bắt buộc phải nhập</span>}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày nhập</label>
              <div className="col-sm-9">
                <input type="date" {...register('createdAt')} className="form-control" placeholder="dd/mm/yyyy" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Category</label>
              <div className="col-sm-9">
                <select {...register('categoryId', {required: true})} className="form-control">
                    {category?.map(item => {
                        console.log(item.id);
                        return <option value={`${item.id}`}> {item.nameCate}</option>
                    })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ảnh sản phẩm</label>
              <div className="col-sm-9">
                <input type="file" className='form-control'/>
              </div>
            </div>
          </div>
          <button className='btn btn-primary mb-2 w-44'>Thêm sản phẩm </button>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default AddProduct
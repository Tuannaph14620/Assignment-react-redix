import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { listCategory } from '../../../features/categorySlice'
import { AddNews } from '../../../features/NewSlice'
import { addProducts } from '../../../features/productSlice'

const AddNew = () => {
    const [img, setImg] = useState()
    const dispatch = useDispatch()
    const notify = () => toast("Thêm thành công!")
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = data => {
        dispatch(AddNews({ ...data, img }))
        // console.log({...data, img, categoryId:number});
        // console.log(typeof number);
        reset()
        notify()
    }
    const InputImage = async (e) => {
        const file = e.target.files[0];
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dl8w6p4sf/image/upload";

        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "jovx8mjh");

        // call api cloudinary

        const response = await axios.post(CLOUDINARY_API, formData, {
            headers: {
                "Content-Type": "application/form-data",
            },
        });
        setImg(response.data.url)
    }
    return (
        <div className="col-10 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Thêm bài viết</h4>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-sample">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Tiêu đề</label>
                                    <div className="col-sm-9">
                                        <input type="text" {...register('title', { required: true })} className="form-control" />
                                        {errors.name && <span>Tên sản phẩm bắt buộc phải nhập</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Mô tả</label>
                                    <div className="col-sm-9">
                                        <input type="text" {...register('desc', { required: true })} className="form-control" />
                                        {errors.price && <span>Giá sản phẩm bắt buộc phải nhập</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nội dung</label>
                                    <div className="col-sm-9">
                                        <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nội dung bài viết"></textarea>
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
                            <div className="col-md-10 ">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" style={{ marginRight: 900 }}> Cover photo </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">

                            </div>
                            <ToastContainer />
                            <button className='btn btn-primary mb-2 w-44'>Thêm sản phẩm </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddNew
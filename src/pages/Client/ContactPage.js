import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { AddContacts } from '../../features/ContactSlice'

const ContactPage = () => {
    const dispatch = useDispatch()
    const notify = () => toast('Chúng tôi đã nhận được ý kiến góp ý của bạn! Xin cảm ơn')
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = data => {
        console.log(1);
        dispatch(AddContacts(data))
        notify()
        reset()
    }
    return (
        <div className='container w-10/12'>
            <div className='row mt-10'>
                <div className='flex justify-between'>
                    <div className='w-6/12'>
                        <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.1787627125686!2d-2.202596184633872!3d53.483135672158056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb197861474df%3A0x7cae7ac8472ab6c9!2sEtihad%20Stadium!5e0!3m2!1svi!2s!4v1649745889409!5m2!1svi!2s" width={800} height={600} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>

                    <div className='text-left ml-20'>
                        <h1 className='text-3xl font-bold pb-20 underline'>Liên hệ</h1>
                        <div className='mb-10'>
                            <span className='text-sm'>Email của chúng tôi</span>
                            <p className='font-bold text-lg'>Manchestercity@gmail.com</p>
                        </div>
                        <div className='mb-10'>
                            <span className='text-sm'>Địa chỉ của chúng tôi</span>
                            <p className='font-bold text-lg'>Etihad Stadium, Ashton New Road, Manchester, Vương Quốc Anh</p>
                        </div>
                        <div className='mb-10'>
                            <span className='text-sm'>Số điện thoại của chúng tôi</span>
                            <p className='font-bold text-lg'>0789.970.907 - 0902.970.907</p>
                        </div>
                        <div className='mb-20'>
                            <span className='text-sm'>Thời gian làm việc</span>
                            <p className='font-bold text-lg'>Thứ 2 đến Thứ CN từ 9h đến 21h</p>
                        </div>
                        <h1 className='text-3xl font-bold pb-10 underline'>Gửi thắc mắc cho chúng tôi </h1>
                        <div className='mb-10'>
                            <form onSubmit={handleSubmit(onSubmit)} className="form-sample">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <input required placeholder='Tên của bạn' type="text" {...register('name', { required: true })} className="form-control inline-block border-2 border-gray-800" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <input required placeholder='Số điện thoại' type="text" {...register('phone', { required: true })} className="form-control border-2 border-gray-800" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group row">
                                            <div className="col-sm-9">
                                                <textarea required {...register('content')} id="content" name="content" rows="3" className="border-2 border-gray-800 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm rounded-md" placeholder="Nội dung"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <ToastContainer />
                                    <button className='btn btn-primary ml-3 w-44'>Gửi cho chúng tôi </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className='row'>

            </div>
        </div>
    )
}

export default ContactPage
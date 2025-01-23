import React from 'react'
import Login from './Login'
import { Link } from 'react-router'
import { useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
        };
        console.log(userInfo);
    };
    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="">
                        {/* if there is a button in form, it will close the modal */}

                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg text-blue-700">Signup</h3>
                        <div className='m-4 space-y-4'>
                            {/* name field */}
                            <h2>Name</h2>
                            <input type="text" name="" placeholder='Enter your Name'
                                {...register("name", { required: true })}
                                className='border-slate-200 border-2 p-2 rounded-md' />
                            <br />
                            {errors.name && <span className='text-[12px] text-red-500'>*This field is required</span>}

                            {/* email field */}
                            <h2>Email</h2>
                            <input type="text" name="" placeholder='Enter your Email'
                                {...register("email", { required: true })}
                                className='border-slate-200 border-2 p-2 rounded-md' />
                            <br />
                            {errors.email && <span className='text-[12px] text-red-500'>*This field is required</span>}

                            {/* password field*/}
                            <h2 className='mt-4'>Password</h2>
                            <input type="password" name="" placeholder='Enter your Password'
                                {...register("password", { required: true })}
                                className='border-slate-200 border-2 p-2 rounded-md' />
                            <br />
                            {errors.password && <span className='text-[12px] text-red-500'>*This field is required</span>}
                        </div>

                        <div className='flex justify-between mt-5'>
                            <button className='p-2 px-3 rounded-md btn-primary bg-blue-700 text-white '>Signup</button>
                            <h5>Already have account ? <button className='underline text-blue-600'
                                onClick={() =>
                                    document.getElementById("my_modal_3").showModal()
                                }
                            >Login</button>
                            </h5>
                        </div>
                    </form>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Signup
import React from 'react';
import { useForm } from "react-hook-form";

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const contactInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
        console.log(contactInfo);
    };

    return (
        <div>
            <div className='flex h-screen justify-center items-center '>
                <div className="modal-box dark:border">
                    <form onSubmit={handleSubmit(onSubmit)} method="">
                        <h3 className="font-bold text-lg text-blue-700">Contact Us</h3>
                        <div className='m-4 space-y-4'>

                            {/* Name field */}
                            <h2>Name</h2>
                            <input 
                                type="text" 
                                placeholder='Enter your Name'
                                {...register("name", { required: true })}
                                className='border-slate-200 border-2 p-2 rounded-md' 
                            />
                            {errors.name && <span className='text-[12px] text-red-500'>*This field is required</span>}

                            {/* Email field */}
                            <h2>Email</h2>
                            <input 
                                type="email" 
                                placeholder='Enter your Email'
                                {...register("email", { required: true })}
                                className='border-slate-200 border-2 p-2 rounded-md' 
                            />
                            {errors.email && <span className='text-[12px] text-red-500'>*This field is required</span>}

                            {/* Message field */}
                            <h2>Message</h2>
                            <textarea 
                                placeholder="Enter your Message"
                                {...register("message", { required: true })}
                                className='border-slate-200 border-2 p-2 rounded-md h-24 resize-none' 
                            />
                            {errors.message && <span className='text-[12px] text-red-500'>*This field is required</span>}
                        </div>

                        <div className='flex justify-end mt-5'>
                            <button className='p-2 px-3 rounded-md btn-primary bg-blue-700 text-white'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

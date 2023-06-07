import React, { useState } from 'react'
import loginSignupImage from '../assest/login-animation.gif'
import { BiShow, BiHide } from 'react-icons/bi'
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    console.log(data, "data");
    const handleShowPassword = () => {
        setShowPassword(preve => !preve)
    }
    const handlesShowConfirmPassword = () => {
        setShowConfirmPassword(preve => !preve)
    }
    const handleOnchange = () => {

    }

    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                    <img src={loginSignupImage} className='w-full' />
                </div>

                <form className='w-full py-3 flex flex-col'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type={"text"}
                        id="firstName"
                        name='firstName'
                        className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400'
                        value={data.firstName}
                        onChange={handleOnchange}
                    />

                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type={"text"}
                        id="lastName"
                        name='lastName'
                        className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400'
                        value={data.lastName}
                        onChange={handleOnchange}
                    />

                    <label htmlFor='email'>Email</label>
                    <input
                        type={"email"}
                        id="email"
                        name='email'
                        className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400'
                        value={data.email}
                        onChange={handleOnchange}
                    />

                    <label htmlFor='password'>Password</label>
                    <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name='password'
                            className='w-full bg-slate-200 border-none outline-none'
                            value={data.password}
                            onChange={handleOnchange}
                        />
                        <span
                            className='flex text-xl cursor-pointer'
                            onClick={handleShowPassword} >{showPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>

                    <label htmlFor='confirmpassword'>Confirm Password</label>
                    <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmpassword" name='confirmpassword'
                            className='w-full bg-slate-200 border-none outline-none'
                            value={data.confirmPassword}
                            onChange={handleOnchange}
                        />
                        <span className='flex text-xl cursor-pointer'
                            onClick={handlesShowConfirmPassword} >{showPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>

                    <button className='max-w-[150px] w-full m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign up</button>
                </form>
                <p className='text-left text-sm mt-2'>Already have account ? <Link to={"login"} className='text-red-500'>Login</Link></p>
            </div>
        </div>
    )
}

export default Signup

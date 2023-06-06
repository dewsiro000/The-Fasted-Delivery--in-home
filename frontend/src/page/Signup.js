import React from 'react'
import loginSignupImage from '../assest/login-animation.gif'

const Signup = () => {
    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
                    <img src={loginSignupImage} className='w-full' />
                </div>

                <form className='w-full'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type={"text"} id="firstName" name='firstName' className='p-1 w-full bg-slate-200 px-2 py-1 rounded' />
                </form>
            </div>
        </div>
    )
}

export default Signup

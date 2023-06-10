import React from 'react'
import { BsCloudUpload } from 'react-icons/bs'

const Newproduct = () => {
    return (
        <div className='p-4'>
            <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'>
                <lable htmlFor='name'>Name</lable>
                <input type={"text"} name="name" className='bg-slate-200 p-1 my-1' />

                <label htmlFor='category'>Category</label>
                <select className='bg-slate-200 p-1 my-1' id='category'>
                    <option>Fruits</option>
                    <option>Vegetable</option>
                    <option>Icream</option>
                    <option>Dosa</option>
                    <option>Piza</option>
                </select>

                <lable htmlFor='image'>Image</lable>
                <div id='image' className='h-40 w-full bg-slate-200 rounded flex items-center justify-center'>
                    <span className='text-5xl'><BsCloudUpload /></span>
                </div>

                <label htmlFor='price' className='my-1'>Price</label>
                <input type={"text"} className='bg-slate-200 p-1 my-1' />

                <label htmlFor='description'>Description</label>
                <textarea rows={2} className='bg-slate-200 p-1 my-1 resize-none'></textarea>

                <button className='bg-red-500 hover:bg-red-600 text-white text-lg my-2 font-medium drop-shadow '>Save</button>
            </form>
        </div>

    )
}

export default Newproduct

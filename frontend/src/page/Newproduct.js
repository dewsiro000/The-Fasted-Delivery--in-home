import React from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { ImagetoBase64 } from '../utility/ImagegetoBase64'
import { useState } from 'react'

const Newproduct = () => {
    const [data, setData] = useState({
        name: "",
        category: "",
        image: "",
        price: "",
        description: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const uploadImage = async (e) => {
        const data = await ImagetoBase64(e.target.files[0])
        // console.log(data)

        setData((preve) => {
            return {
                ...preve,
                image: data
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }

    return (
        <div className='p-4'>
            <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type={"text"} name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} />

                <label htmlFor='category'>Category</label>
                <select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handleOnChange}>
                    <option >select category</option>
                    <option >Fruits</option>
                    <option >Vegetable</option>
                    <option>Icream</option>
                    <option >Dosa</option>
                    <option>Pizza</option>
                    <option >rice</option>
                    <option >Cake</option>
                    <option >Burger</option>
                    <option >Panner</option>
                    <option >Sandwich</option>
                </select>

                <label htmlFor='image'>Image
                    <div className='h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer'>
                        {
                            data.image ? <img src={data.image} className='h-full' /> : <span className='text-5xl'><BsCloudUpload /></span>
                        }
                        <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden" />
                    </div>
                </label>

                <label htmlFor='price' className='my-1'>Price</label>
                <input type={"text"} className='bg-slate-200 p-1 my-1' name='price' onChange={handleOnChange} />

                <label htmlFor='description'>Description</label>
                <textarea rows={2} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={handleOnChange}></textarea>

                <button className='bg-red-500 hover:bg-red-600 text-white text-lg my-2 font-medium drop-shadow '>Save</button>
            </form>
        </div>

    )
}

export default Newproduct

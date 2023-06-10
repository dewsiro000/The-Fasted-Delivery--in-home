import React from 'react'

const Newproduct = () => {
    return (
        <div className='m-auto w-full max-w-md p-4'>
            <div>
                <form>
                    <lable htmlFor='name'>Name</lable>
                    <input type={"text"} name="name" />

                    <select>
                        <option>Fruits</option>
                        <option>Vegetable</option>
                        <option>Icream</option>
                        <option>Dosa</option>
                        <option>Piza</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default Newproduct

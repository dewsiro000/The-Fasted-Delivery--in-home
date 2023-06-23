import React from 'react'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeatures from '../component/CardFeatures'

const Home = () => {
    const productData = useSelector((state) => state.product.productList)
    const homeProductCartList = productData.slice(1, 5);
    const homeProductCartListVegetables = productData.filter(el => el.category === "vegetable", [])

    const loadingArray = new Array(4).fill(null)
    return (
        <div className='p-2 md:p-4'>
            <div className='md:flex gap-4 py-2'>

                <div className='md:w-1/2'>
                    <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
                        <p className='text-sm font-medium text-slate-900 '>Bike Delivery</p>
                        <img src="https://vectoricons.net/images/products/iconsets/bike@700x575.png" className='h-7' />
                    </div>
                    <h2 className='text-4xl md:text-7xl font-bold py-3'>The Fasted Delivery in <span className='text-red-500'>Your Home</span></h2>
                    <p className='py-3 text-base'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>
                </div>

                <div className='md:w-1/2 flex flex-wrap gap-5 p-20 justify-center'>
                    {homeProductCartList[0] ?
                        homeProductCartList.map(el => {
                            return (
                                <HomeCard
                                    image={el.image}
                                    name={el.name}
                                    price={el.price}
                                    category={el.category}
                                />
                            )
                        })
                        :
                        loadingArray.map((el, index) => {
                            return (
                                <HomeCard
                                    key={index}
                                    loading={"Loading..."}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div>
                <h2 className='font-bold text-2xl text-slate-800'>Fresh Vegetable</h2>
                <div>
                    {
                        homeProductCartListVegetables.map(el => {
                            <CardFeatures
                                key={el._id}
                                name={el.name}
                                category={el.category}
                                price={el.price}
                                image={el.image}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home

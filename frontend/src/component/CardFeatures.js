import React from 'react'

const CardFeatures = ({ image, name, price, category }) => {
    return (
        <div>
            <div className='h-20'>
                <img src={image} className='h-full' />
            </div>
        </div>
    )
}

export default CardFeatures

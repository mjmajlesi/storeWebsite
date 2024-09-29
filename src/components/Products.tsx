import React from 'react'
import { IProdect } from '../pages/store'
type TProductPage = IProdect
export default function Products({price , image , description , title}:TProductPage) {
  return (
    <div className=' shadow-md p-2 rounded-md'>
      <img className='rounded-md h-96 object-cover' src={image} alt="img" />
      <div className='flex justify-between items-center px-2'>
        <h2 className='line-clamp-1 w-44'>{title}</h2>
        <span className='font-bold'>{price}$</span>
      </div>
    <div className='p-2'>
      <p className=' line-clamp-2 text-gray-600'>
        {description}
      </p>
    </div>
    </div>
  )
}

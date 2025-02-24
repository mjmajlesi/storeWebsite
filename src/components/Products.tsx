import React from 'react'
import { IProdect } from '../pages/store'
type TProductPage = IProdect
export default function Products({price , image , description , title}:TProductPage) {
  return (
    <div className=' shadow-md p-2 rounded-lg'>
      <img className='rounded-xl h-72 object-contain w-full' src={image} alt="img" />
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

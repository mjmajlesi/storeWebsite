import React from 'react'
import { IProduct } from '../pages/store'

type TProductProps = IProduct

export default function Products({ price, image, description, title }: TProductProps) {
  return (
    <div className="shadow-md p-2 rounded-lg">
      <img className="rounded-xl h-72 object-contain w-full" src={image} alt={title} />
      <div className="flex justify-between items-center px-2">
        <h2 className="line-clamp-1 w-44">{title}</h2>
        <span className="font-bold">{price}$</span>
      </div>
      <div className="p-2">
        <p className="line-clamp-2 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}

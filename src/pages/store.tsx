import React, { useEffect, useState } from 'react'
import Products from '../components/Products'
import Container from '../components/container'
import { Link } from 'react-router-dom'
import { getProducts } from '../services/api'

export interface IProdect {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export default function Store() {

  const [Product, setProduct] = useState<IProdect[]>()
  useEffect(() => {
    getProducts().then(res => setProduct(res))
  }, [])

  return (
    <Container>
      <div className='flex justify-between relative ms:hidden gap-8'>
        <div>
          <h1 className='m-5'>The new products</h1>
          <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-5'>
            {
              Product?.map((prudect) => (
                <Link key={prudect.id} to={`/product/${prudect.id}`}>
                  <Products {...prudect} />
                </Link>
              ))
            }
          </div>
        </div>
        <div className=' w-full border-2'>
            <h1 className='font-bold text-3xl'>Filters</h1>
            <ul>
              <li>Clothes</li>
              <li>Electrics</li>
            </ul>
        </div>
      </div>

    </Container>
  )
}

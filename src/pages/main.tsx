import React, { useEffect, useState } from 'react'
import Container from '../components/container'
import { IProdect } from './store'
import { getProducts } from '../services/api'
import { Link } from 'react-router-dom'
import Products from '../components/Products'
import "../App.css"
export default function Main() {
  
    const [Product , setProduct] = useState<IProdect[]>()
    useEffect(() => {
      getProducts().then(res => setProduct(res))
    }, [])

  return (
    <Container>
    <div className=' w-full h-1/2vh border-4 bg-teal-700'>
      <h1 className=' font-semibold text-2xl shadow-lg flex justify-center items-center h-1/2vh'>welcome to mjmStore!</h1>
    </div>
      <span className='my-5 float-left text-lg'> prudects </span>
        <div className='mt-20 grid grid-cols-5 scrolling-wrapper-flexbox scrolling-wrapper'>
        {
            Product?.map((prudect)=>(
              <Link key={prudect.id} to={`/product/${prudect.id}`}>
                <Products {...prudect}/>
              </Link>
            ))
          }
        </div>
    </Container>
  )
}

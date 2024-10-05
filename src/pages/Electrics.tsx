import React, { useEffect, useState } from 'react'
import Container from '../components/container'
import { Link } from 'react-router-dom'
import Products from '../components/Products'
import { IProdect } from './store'
import { getProducts } from '../services/api'

function Electrics() {
    
  const [Product , setProduct] = useState<IProdect[]>()
  useEffect(() => {
    getProducts().then(res => setProduct(res))
  }, [])

    let ProdectElectrics = Product?.filter((product)=> product.category === "electronics")
  return (
    <div>
      <Container>
        <h1 className='m-5'>The new products</h1>
        <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
          {
            ProdectElectrics?.map((prudect)=>(
              <Link key={prudect.id} to={`/product/${prudect.id}`}>
                <Products {...prudect}/>
              </Link>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Electrics
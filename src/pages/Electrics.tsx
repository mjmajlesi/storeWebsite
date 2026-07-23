import React, { useEffect, useState } from 'react'
import Container from '../components/container'
import { Link } from 'react-router-dom'
import Products from '../components/Products'
import { IProduct } from './store'
import { getProducts } from '../services/api'

function Electrics() {
  const [products, setProducts] = useState<IProduct[]>()
  useEffect(() => {
    getProducts().then(res => setProducts(res))
  }, [])

  const productElectrics = products?.filter((product) => product.category === "electronics")

  return (
    <div>
      <Container>
        <h1 className="m-5 text-3xl text-center mb-8">The New Products</h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {productElectrics?.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Products {...product} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Electrics
import { useEffect, useState } from 'react'
import Container from '../components/container'
import { IProduct } from './store'
import { getProducts } from '../services/api'
import { Link } from 'react-router-dom'
import Products from '../components/Products'

function Clothes() {
  const [products, setProducts] = useState<IProduct[]>()
  useEffect(() => {
    getProducts().then(res => setProducts(res))
  }, [])

  const productClothes = products?.filter((product) => product.category === "clothing")

  return (
    <div>
      <Container>
        <h1 className="m-5 text-3xl text-center mb-8">The New Clothes</h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {productClothes?.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Products {...product} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Clothes

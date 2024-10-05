import { useEffect, useState } from 'react'
import Container from '../components/container'
import { IProdect } from './store'
import { getProducts } from '../services/api'
import { Link } from 'react-router-dom'
import Products from '../components/Products'

function Clothes() {

    const [Product , setProduct] = useState<IProdect[]>()
    useEffect(() => {
      getProducts().then(res => setProduct(res))
    }, [])
  
    let ProdectClothes = Product?.filter((prudect)=> prudect.category === "clothing")
  return (
    <div>
      <Container>
        <h1 className='m-5 text-3xl text-center mb-8'>The new Clothes</h1>
        <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
          {
            ProdectClothes?.map((prudect)=>(
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

export default Clothes
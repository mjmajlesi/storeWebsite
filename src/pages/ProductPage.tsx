import React, { useEffect, useState } from 'react'
import Container from '../components/container'
import Button from '../components/buttuns'
import { useParams } from 'react-router-dom'
import { getProdect } from '../services/api'
import { IProdect } from './store'
import { useAppContext } from '../components/AppContext'
import DoneIcon from '@mui/icons-material/Done';
export default function ProductPage() {

    const { AppInCountCards , getCountCards} = useAppContext()

    const params = useParams<{ id : string }>()
    const [ Prodect , setPrudect] = useState<IProdect>()
    
    useEffect(() => {
        params.id ? getProdect(params.id as string).then(res => setPrudect(res)) : <h1>Loading...</h1>
    }, [params.id])

  return (
    <Container>
        <div className='flex flex-col items-center '>
            <div className="shadow-md w-500">
                <div>
                    <img className='rounded-md p-3' src={Prodect?.image} alt="img" />
                </div>
                <div className='flex justify-between items-center px-2'>
                    <h2>{Prodect?.title}</h2>
                    <span>{Prodect?.price}$</span>
                </div>
                <div className='p-3'>
                    <p className='mb-4 text-gray-700'>
                        {Prodect?.description}
                    </p>
                    {getCountCards(parseInt(params.id as string)) === 0 ? 
                    <Button onClick={() => AppInCountCards(parseInt(params.id as string))} variant='normal'>
                        Add Product
                    </Button> : <div className='flex border-2 bg-green-800 p-3'>
                        <DoneIcon />
                        <p className='ml-2 text-white' > This product has been added to the shopping cart</p>
                    </div>
                    }

                </div>
            </div>

        </div>
    </Container>


  )
}

// use params == چیزی که در روت مقابل دونقطه هست را در خودش ذخیره میکنه
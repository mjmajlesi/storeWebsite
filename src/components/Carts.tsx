import React, { useEffect, useState } from 'react'
import Button from './buttuns'
import { ICardItems, useAppContext } from './AppContext'
import { IProdect } from '../pages/store'
import { getProdect } from '../services/api'
import { Link } from 'react-router-dom'

export default function Carts({id , qty }:ICardItems) {

  const {AppDeCountCards , AppInCountCards ,AppRemoveCards} = useAppContext()

  const [ Prodect , setPrudect] = useState<IProdect>()
  useEffect(() => {
    getProdect(id).then((res) =>{
      setPrudect(res) 
    })
  }, [id])

  return (
    <div className='flex my-3 bg-gray-300 p-3'>
      <div>
        <Link to={`/product/${id}`}>
        <img className='rounded-md w-36' src={Prodect?.image} alt="img" />
        </Link>
      </div>
      <div>
        <h3 className='p-2'>{Prodect?.title}  : {id}</h3>

        <Button className='mx-2 !px-4 !py-2'
        variant='seccece'
        onClick={() => AppInCountCards(id)}
        >+</Button>

        <span>{qty}</span>

        <Button className='mx-2 !px-4 !py-2'
        variant='danger'
        onClick={()=> AppDeCountCards(id)}
        >-</Button>

        <Button className='p-1'
        variant='normal'
        onClick={() => AppRemoveCards(id)}
        >remove</Button>

      </div>
    </div>
  )
}
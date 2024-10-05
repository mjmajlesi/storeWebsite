import React, { useEffect, useState } from 'react'
import Container from '../components/container'
import { IProdect } from './store'
import { getProducts } from '../services/api'
import { Link } from 'react-router-dom'
import Products from '../components/Products'
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "../App.css"
import Button from '../components/buttuns'
export default function Main() {
  
    const [Product , setProduct] = useState<IProdect[]>()
    useEffect(() => {
      getProducts().then(res => setProduct(res))
    }, [])

  return (
    <Container>
        <div className="flex justify-between items-center flex-wrap gap-8 pb-8 ">
          <div className="flex flex-col gap-12 p-4">
            <div className="head">
                <motion.h1
                className="text-6xl font-bold"
                  initial={{ y: "1.5rem", opacity: 0.1 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 2,
                    type: "ease-in",
                  }}
                  >
                  Welcome to <br />
                  mjmShop!
                </motion.h1>
            </div>
            <div className="flex flex-col text-sm items-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div className="flex items-center bg-white rounded-sm border-4 py-2 px-1 w-full justify-between">
            <input className="border-none outline-none text-slate-800 px-4" type="text" />
            <Button variant="login" className="button">Search</Button>
            </div>
 
            <div className="flex items-center flex-wrap gap-8 w-full justify-between">
                <div className="flex flex-col items-center justify-center text-3xl">
                  <span>
                    <CountUp start={8800} end={9000} duration={4} /> <span className="text-orange-600">+</span>
                  </span>
                  <span className="text-sm">Premium Product</span>
                </div>
    
                <div className="flex flex-col items-center justify-center text-3xl ">
                  <span>
                    <CountUp start={1950} end={2000} duration={4} /> <span className="text-orange-600">+</span>
                  </span>
                  <span className="text-sm">Happy Customer</span>
                </div>
    
                <div className="flex flex-col items-center justify-center text-3xl">
                  <span>
                    <CountUp start={26} end={28} /> <span className=" text-orange-600">+</span>
                  </span>
                  <span className="text-sm">Awards Winning</span>
                </div>
          </div>
        </div>
          <div className="flex items-center justify-center flex-wrap">
           <motion.div
           initial={{x:"6rem" , opacity:0}}
           animate={{x:0 , opacity:1 }}
           transition={{
            duration:2 ,
            type: "ease-in",
           }}
           className="w-500 h-450 overflow-hidden rounded-lg border-4"
           >
            <img
                className='w-full h-full' 
                src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?t=st=1728127756~exp=1728131356~hmac=af838c4d659d59085f6ee044aecddc78a574ec54c4c0ad3e46d3f1e50c9040ef&w=996"alt="img" />
           </motion.div>
          </div>
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

        <div className='flex items-center justify-between flex-wrap py-6'>
          <div className='w-5/12 h-200 bg-lime-900 '>
          <Link to='/clothes'>
            <p className=' flex items-center justify-center h-200 text-3xl'>
              Clothes
            </p>
            </Link>
          </div>
            <div className='w-5/12 h-200 bg-lime-600 '>
            <Link to='/electrics'>
              <p className=' flex items-center justify-center h-200 text-3xl'>
                Electrical appliances
              </p>
            </Link>
          </div>
        </div>
    </Container>
  )
};

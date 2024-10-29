import { useEffect, useState } from 'react'
import Container from '../components/container'
import { IProdect } from './store'
import { getProducts } from '../services/api'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "../App.css";
import Button from '../components/buttuns';
import express from '../images/express-delivery.svg';
import cash from '../images/cash-on-delivery.svg';
import Dreturn from '../images/days-return.svg';
import Oprudect from '../images/original-products.svg';
import Products from '../components/Products'
import Anime from './../images/AnimationShop.json'
import Lottie from "react-lottie"
export default function Main() {

  const [Product, setProduct] = useState<IProdect[]>()
  useEffect(() => {
    getProducts().then(res => setProduct(res))
  }, [])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Anime,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Container>
      <div className="flex justify-between items-center flex-wrap gap-8 pb-8 px-8">
        <div className="flex flex-col gap-8 p-4">
          <div className="head">
            <motion.h1
              className="text-5xl font-bold"
              initial={{ y: "1.5rem", opacity: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Welcome to
              Shop!
            </motion.h1>
          </div>
          <div className="flex flex-col text-base items-center">
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
          <div
            className="overflow-hidden rounded-lg"
          >
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
      <motion.h3
        initial={{ y: "-1rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "ease-in",
        }}
        className='mt-8 mb-3 text-3xl text-center'> prudects </motion.h3>
      <div className='my-10'>
        <div className="slider-container">
          <Slider {...settings}>
            {
              Product?.map((prudect) => (
                <Link key={prudect.id} to={`/product/${prudect.id}`}>
                  <Products {...prudect} />
                </Link>
              ))
            }
          </Slider>
        </div>
      </div>
      <div className='flex items-center justify-between flex-wrap my-10 pt-10'>
        <div className='w-46 h-200 bg-clothes'>
          <Link to='/clothes'>
            <p className=' flex items-center justify-center h-200 text-white text-3xl'>
              Clothes
            </p>
          </Link>
        </div>
        <div className='w-46 h-200 bg-digital text-white'>
          <Link to='/electrics'>
            <p className=' flex items-center justify-center h-200 text-3xl'>
              Electrical appliances
            </p>
          </Link>
        </div>
      </div>

      <div className='flex items-center gap-8 flex-wrap justify-around my-14'>
        <div className='flex flex-col items-center'>
          <img className='shrink' src={cash} alt="cash" />
          <span>Non-cash payment</span>
        </div>
        <div className='flex flex-col items-center'>
          <img className='shrink' src={Dreturn} alt="D-return" />
          <span>Seven day delivery</span>
        </div>
        <div className='flex flex-col items-center'>
          <img className='shrink' src={express} alt="express" />
          <span>Fast shipping</span>
        </div>
        <div className='flex flex-col items-center'>
          <img className='shrink' src={Oprudect} alt="O-prudect" />
          <span>Product authenticity</span>
        </div>
      </div>
    </Container>
  )
}

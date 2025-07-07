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

  // settings for slider's Product
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
      <div className="flex justify-between items-center flex-wrap gap-8 py-12 lg:p-12">
        <div className="flex flex-col gap-12 p-6">
          <div className="head">
            <motion.h1
              className="text-[32px] lg:text-[48px] font-bold font-sans"
              initial={{ y: "2rem", opacity: 0.1 }}
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
          <div className="flex flex-col text-[16px] lg:text-[20px] items-start">
            <span>This Simple Website For Shopping... </span>
            <span>Electrical , Clothes and everythings for needed !</span>
          </div>
          <div className="flex items-center flex-wrap gap-8 w-full justify-between">
            <div className="flex flex-col items-center justify-center text-3xl">
              <span>
                <CountUp start={8800} end={9000} duration={2} /> <span className="text-Blue">+</span>
              </span>
              <span className="text-sm">Premium Product</span>
            </div>

            <div className="flex flex-col items-center justify-center text-3xl ">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span className="text-Blue">+</span>
              </span>
              <span className="text-sm">Happy Customer</span>
            </div>

            <div className="flex flex-col items-center justify-center text-3xl">
              <span>
                <CountUp start={16} end={28} /> <span className=" text-Blue">+</span>
              </span>
              <span className="text-sm">Awards Winning</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap max-lg:hidden">
          <div
            className="overflow-hidden rounded-lg"
          >
            <Lottie
              options={defaultOptions}
              height={350}
              width={350}
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
        className='mt-8 mb-3 text-[40px] text-center font-sans'> prudects </motion.h3>
      <div className='my-10 border-4 border-gray-600 rounded-2xl'>
        <div className="slider-container p-6">
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
      <div className='flex items-center justify-between flex-wrap my-10 pt-10 '>
        <div className='w-46 h-200 bg-clothes rounded-xl'>
          <Link to='/clothes'>
            <p className='flex items-center justify-center h-200 text-white text-3xl'>
              Clothes
            </p>
          </Link>
        </div>
        <div className='w-46 h-200 bg-digital text-white rounded-xl'>
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

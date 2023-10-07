import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {FiShoppingCart} from "react-icons/fi"
import Link from "next/link"
import heroImage from "/public/hero-img.webp"
import Image from "next/image"



const Hero = () => {
  return (
    <section  className='flex flex-col lg:flex-row gap-y-10  py-6'>
        {/* Left div */}

        <div className='flex-1'>
        <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-600 hover:bg-blue-200'>Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
        An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Link href={'/cart'}><Button className=' bg-black py-3.5 px-4 text-red-600 flex justify-center gap-2'>
      <FiShoppingCart  className='h-6 w-6'/>

       Start Shopping 
      </Button>
      </Link>
        </div>
        {/* Right div */}
        <div className='flex-1'>
        <Image  src={heroImage} alt='hero'/>
        </div>
    </section>
  )
}

export default Hero
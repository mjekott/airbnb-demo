import React from 'react'
import Image from 'next/image'
import BannerSvg from '../assets/banner.svg'

export default function Banner() {
  return (
    <div className="relative h-[300px] w-full  sm:h-[400px] lg:h-[500px] xl:h-[600px]  2xl:h-[700px]">
      <Image
        src={BannerSvg}
        layout="fill"
        priority
        objectFit="cover"
        className="h-full w-full brightness-75"
      />
      <div className="absolute top-1/3 w-full text-center">
        <p className="text-lg text-white drop-shadow-2xl md:text-3xl lg:text-6xl">
          Find the Most Efficient and Reliable <br /> Working Space Near You.
        </p>
        <button
          className="my-3 rounded-full bg-white px-10  py-4 font-bold text-purple-500
        shadow-md outline-none transition duration-150 ease-out hover:shadow-xl active:scale-75 lg:my-9"
        >
          I'm flexible
        </button>
      </div>
    </div>
  )
}

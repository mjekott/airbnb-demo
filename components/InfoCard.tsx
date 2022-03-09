import Image from 'next/image'
import React from 'react'
import { IPlaces } from '../types/index'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'

function InfoCard({
  description,
  img,
  lat,
  location,
  long,
  price,
  star,
  title,
  total,
}: IPlaces) {
  return (
    <div className="flex w-full cursor-pointer py-7 px-2 transition duration-200 ease-out first:border-t hover:opacity-80 hover:shadow-lg ">
      <div className=" relative h-24 w-40 flex-shrink-0 overflow-hidden rounded-lg md:h-52 md:w-80">
        <Image layout="fill" src={img} objectFit="cover" />
      </div>
      <div className="flex flex-1 flex-col px-2">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h2 className="text-xl">{title}</h2>
        <div className="w-10 border-b pt-2" />
        <div className="mb-2 flex-grow pt-2 text-sm text-gray-500">
          {description}
        </div>
        <div className="flex justify-between">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard

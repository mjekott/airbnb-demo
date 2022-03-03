import React from 'react'
import { ILargeCard } from '../types/index'
import Image from 'next/image'

export default function LargeCard({
  img,
  description,
  title,
  buttonText,
}: ILargeCard) {
  return (
    <section className="relative">
      <div className="relative h-96 min-w-[300px] ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="mb-3 w-64 text-4xl">{title}</h3>
        <p>{description}</p>
        <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">
          {buttonText}
        </button>
      </div>
    </section>
  )
}

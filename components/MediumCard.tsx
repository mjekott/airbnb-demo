import Image from 'next/image'
import React from 'react'
import { ICardData } from '../types/index'

export default function MediumCard({ img, title }: ICardData) {
  return (
    <div className="flex cursor-pointer flex-col transition duration-200 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h2>{title}</h2>
    </div>
  )
}

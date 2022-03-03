import React from 'react'
import Image from 'next/image'
import Logo from '../assets/logo.svg'
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="px- fixed top-0 z-50 grid w-full grid-cols-3 bg-white py-5 shadow-md md:px-5">
      {/* left */}
      <div className="relative mx-auto flex h-10 cursor-pointer items-center justify-center">
        <Image src={Logo} objectFit="contain" className="w-20" />
      </div>

      {/* middle */}
      <div className="flex flex-grow items-center rounded-full py-2 lg:border-2 lg:shadow-sm ">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow bg-transparent pl-5 text-gray-600 outline-none placeholder:text-gray-400"
        />
        <SearchIcon className="mx-2 hidden aspect-square w-8 cursor-pointer rounded-full bg-purple-400 p-2 text-white lg:inline-flex" />
      </div>

      {/*  right*/}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer lg:inline-flex">Become a host</p>
        <GlobeAltIcon className="w-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header

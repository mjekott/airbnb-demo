import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../assets/logo.svg'
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IHeader {
  placeholder?: string
}

const Header = ({ placeholder }: IHeader) => {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [nofGuests, setNoOfGuests] = useState(1)
  const router = useRouter()
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date)
    setEndDate(ranges.selection.endDate as Date)
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        nofGuests,
      },
    })
  }

  const resetInput = () => setSearchInput('')
  return (
    <header className="sticky top-0 left-0 right-0 z-50 grid w-full grid-cols-3 bg-white py-5 shadow-md md:px-5">
      {/* left */}
      <div className="relative mx-auto flex h-10 cursor-pointer items-center justify-center">
        <Link href="/">
          <Image src={Logo} objectFit="contain" className="w-20" />
        </Link>
      </div>

      {/* middle */}
      <div className="flex flex-grow items-center rounded-full py-2 lg:border-2 lg:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || 'Start your search'}
          className="flex-grow rounded-full bg-transparent pl-5 text-gray-600 outline-none placeholder:text-gray-400"
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

      {/* search result container */}
      {searchInput && (
        <div className="col-span-3 mx-auto mt-2 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FDDB61']}
            onChange={handleSelect}
          />
          <div className="mb-4 flex items-center border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              value={nofGuests}
              onChange={(e) => setNoOfGuests(+e.target.value)}
              className="w-12 pl-2 text-red-400 outline-none"
              min={1}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-500" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

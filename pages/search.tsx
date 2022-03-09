import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { IPlaces } from '../types/index'
import { InferGetStaticPropsType } from 'next'
import { getStaticProps } from '.'
import InfoCard from '../components/InfoCard'

function search({ searchResults }: { searchResults: IPlaces[] }) {
  const router = useRouter()
  const { location, startDate, endDate, nofGuests } = router.query
  let formattedStartDate, formattedEndDate
  if (startDate && endDate) {
    formattedStartDate = format(new Date(startDate as string), 'dd MMMM yy')
    formattedEndDate = format(new Date(endDate as string), 'dd MMMM yy')
  }
  const range = `${formattedStartDate} -- ${formattedEndDate}`

  return (
    <div className="relative min-h-screen">
      <Header placeholder={`${location} | ${range} | ${nofGuests} guests`} />
      <main className="flex">
        <section className="flex-grow px-16 pt-14">
          <p className="text-xs">
            300+ stays from {range} for - {nofGuests} guests
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Stays in {location}</h1>
          <div className="mb-5 mt-4 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <button className="button">Cancellation</button>
            <button className="button">Type of Place</button>
            <button className="button">Price</button>
            <button className="button">Room and Beds</button>
            <button className="button">More filters</button>
          </div>
          <div className="divide-y-1 flex flex-col divide-gray-300">
            {searchResults &&
              searchResults.map((item) => (
                <InfoCard {...item} key={item.title} />
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default search

export async function getServerSideProps() {
  const searchResults: IPlaces[] = await fetch(
    'https://links.papareact.com/isz'
  ).then((res) => res.json())
  return {
    props: {
      searchResults,
    },
  }
}

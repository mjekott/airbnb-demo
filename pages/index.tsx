import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { InferGetStaticPropsType } from 'next'
import { IExploreData } from '../types'
import SmallCard from '../components/SmallCard'
import { v4 as uuid } from 'uuid'

export default function Home({
  exploreData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden">
      <Head>
        <title>House Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto w-full max-w-7xl px-8 sm:px-16">
        {/* Explore section */}
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-bold">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData &&
              exploreData.map((item) => (
                <SmallCard
                  key={uuid()}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              ))}
          </div>
        </section>
        {/* Live Anywhere */}
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-bold">Live Anywhere</h2>
          <div className="flex flex-nowrap overflow-x-scroll"></div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData: IExploreData[] = await fetch(
    'https://jsonkeeper.com/b/4G1G'
  ).then((res) => res.json())
  console.log(exploreData)

  return {
    props: {
      exploreData,
    },
  }
}

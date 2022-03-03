import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { InferGetStaticPropsType } from 'next'
import { ICardData, IExploreData } from '../types'
import SmallCard from '../components/SmallCard'
import { v4 as uuid } from 'uuid'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({
  exploreData,
  cardData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden">
      <Head>
        <title>House Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />
      <main className="custom-container">
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
          <div className="-ml-3  flex space-x-4 overflow-x-scroll p-3 scrollbar-hide">
            {cardData &&
              cardData.map((item) => (
                <MediumCard img={item.img} title={item.title} key={uuid()} />
              ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlits curated ny Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData: IExploreData[] = await fetch(
    'https://jsonkeeper.com/b/4G1G'
  ).then((res) => res.json())
  const cardData: ICardData[] = await fetch(
    'https://jsonkeeper.com/b/VHHT'
  ).then((res) => res.json())

  return {
    props: {
      exploreData,
      cardData,
    },
  }
}

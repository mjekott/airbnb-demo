import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden">
      <Head>
        <title>House Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl">Explore Nearby</h2>
          lorem*100
        </section>
      </main>
    </div>
  )
}

export default Home

export async function getSaticProps() {
  const ex
}

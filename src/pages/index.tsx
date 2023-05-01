import Head from 'next/head'
import type { NextPage } from 'next'
import Offer from 'components/screens/Offer/Offer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Uzbechka.ua</title>
      </Head>
      <Offer />
    </div>
  )
}

export default Home;
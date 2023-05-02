import Head from 'next/head'
import type { NextPage } from 'next'
import Offer from 'components/screens/Offer/Offer';
import About from 'components/screens/About/About';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Uzbechka.ua</title>
      </Head>
      <Offer />
      <About />
    </div>
  )
}

export default Home;
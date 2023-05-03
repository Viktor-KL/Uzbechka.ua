import Head from 'next/head'
import type { NextPage } from 'next'
import Offer from 'components/screens/Offer/Offer';
import About from 'components/screens/About/About';
import Menu from 'components/screens/Menu/Menu';
import BannerMenu from 'components/screens/BannerMenu/BannerMenu';
import BannerInstagram from 'components/screens/BannerInstagram/BannerInstagram';
import Benefits from 'components/screens/Benefits/Benefits';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Uzbechka.ua</title>
      </Head>
      <Offer />
      <About />
      <Menu />
      <BannerMenu />
      <Benefits />
      <BannerInstagram />
    </div>
  )
}

export default Home;